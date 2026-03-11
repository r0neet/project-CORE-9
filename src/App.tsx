import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trainers from './pages/Trainers';
import Equipment from './pages/Equipment';
import YogaPilates from './pages/YogaPilates';
import SpecialAmenities from './pages/SpecialAmenities';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/yoga-pilates" element={<YogaPilates />} />
          <Route path="/special-amenities" element={<SpecialAmenities />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
