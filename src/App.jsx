import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { FaWhatsapp } from "react-icons/fa"; // Importez l'icône WhatsApp

const App = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+237658488485";
    const message = encodeURIComponent("Bienvenue chez Abdou Dev. Quel service puis-je vous rendre ?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <button
          onClick={openWhatsApp}
          className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Contacter sur WhatsApp"
        >
          <FaWhatsapp size={24} />
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;