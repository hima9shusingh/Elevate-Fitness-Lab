import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BMICalculator from './components/BMICalculator';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-gym-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Trainers />
        <BMICalculator />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#1A1A1A',
          color: '#fff',
          border: '1px solid #333',
        }
      }} />
    </div>
  );
}

export default App;
