import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; // Import de react-type-animation
import { styles } from "../styles"; // Assurez-vous que ce fichier existe et contient les styles nécessaires
import { ComputersCanvas } from "./canvas"; // Assurez-vous que ce composant existe

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Colonne pour le cercle et la ligne */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Titre et sous-titre avec animation */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>ABDOU CHIRAC</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypeAnimation
              sequence={["Développeur Web", 1000, "Passionné de Technologie", 1000]} // Séquence d'animation
              wrapper="span"
              speed={50} // Vitesse de l'animation
              repeat={Infinity} // Répétition infinie
              className="text-[#915EFF]" // Classe pour styliser le texte
            />
          </p>
        </div>
      </div>

      {/* Composant Canvas pour les ordinateurs */}
      <ComputersCanvas />

      {/* Flèche animée pour la navigation */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0], // Animation de déplacement vertical
              }}
              transition={{
                duration: 1.5, // Durée de l'animation
                repeat: Infinity, // Répéter indéfiniment
                repeatType: "loop", // Type de répétition
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' // Style de la flèche
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
