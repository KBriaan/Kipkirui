import './App.css';
import CtaSection from './components/Ctasection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <PortfolioSection/>
    <Testimonials/>
    <CtaSection/>
    </div>
  );
}

export default App;
