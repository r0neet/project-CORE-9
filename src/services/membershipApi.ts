export interface MemberData {
  fullName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string; // Expected format: DD.MM.YYYY
  membershipPlan: string;
  photoUrl: string;
}

export interface BirthdayMember {
    fullName: string;
    photoUrl: string;
}

const API_URL = 'https://script.google.com/macros/s/AKfycbwzm7XYYX05JmCP3audAWcObSu440iFKZsh5g-iIjle5zljcOddI0tKIrLQta9RELyW/exec';
const CACHE_KEY = 'core9_birthdays';
const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes

export const submitMembership = async (data: MemberData): Promise<boolean> => {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'no-cors' // Google Apps Script Web Apps often require no-cors for POST from browser
    });
    
    // With no-cors, we can't read the response, but we can assume it succeeded if no network error occurred.
    // In a real production app with a proper backend, we'd check response.ok.
    return true; 
  } catch (error) {
    console.error("Error submitting membership:", error);
    return false;
  }
};

export const fetchTodayBirthdays = async (): Promise<BirthdayMember[]> => {
    try {
        // Check cache first
        const cachedStr = sessionStorage.getItem(CACHE_KEY);
        if (cachedStr) {
            const cachedData = JSON.parse(cachedStr);
            if (Date.now() - cachedData.timestamp < CACHE_DURATION_MS) {
                return cachedData.data;
            }
        }

        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Ensure data is an array
        if (!Array.isArray(data)) {
             console.error("Expected array from API, got:", data);
             return [];
        }

        const today = new Date();
        const todayDay = String(today.getDate()).padStart(2, '0');
        const todayMonth = String(today.getMonth() + 1).padStart(2, '0');


        const birthdays = data.filter((member: any) => {
             const dobRaw = member.dateOfBirth || member.DateOfBirth;
             if (!dobRaw) return false;
             
             // Handle actual Date objects (e.g. from JSON serialization of JS Dates)
             let dobDate;
             if (dobRaw instanceof Date) {
                 dobDate = dobRaw;
             } else if (typeof dobRaw === 'string') {
                 // Try parsing ISO or formatted strings like YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.sssZ
                 if (dobRaw.includes('T') || dobRaw.match(/^\d{4}-\d{2}-\d{2}/)) {
                     dobDate = new Date(dobRaw);
                 } else {
                     // Try parsing DD.MM.YYYY, DD/MM/YYYY, or DD-MM-YYYY
                     const parts = dobRaw.split(/[./-]/);
                     if (parts.length >= 3) {
                         if (parts[0].length === 4) {
                             dobDate = new Date(`${parts[0]}-${parts[1]}-${parts[2]}`); // YYYY-MM-DD
                         } else {
                             dobDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); // Assume DD-MM-YYYY
                         }
                     }
                 }
             }

             if (dobDate && !isNaN(dobDate.getTime())) {
                 const mMonth = String(dobDate.getMonth() + 1).padStart(2, '0');
                 const mDay = String(dobDate.getDate()).padStart(2, '0');
                 return mDay === todayDay && mMonth === todayMonth;
             }
             
             return false;
        }).map((member: any) => ({
             fullName: member.fullName || member.FullName || 'Member',
             photoUrl: member.photoUrl || member.PhotoURL || ''
        }));

        // Update cache
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            data: birthdays
        }));

        return birthdays;

    } catch (error) {
        console.error("Error fetching birthdays:", error);
        return [];
    }
};
