import { motion } from "framer-motion";
import Carousel from "../components/Carousel"

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="px-6 py-10" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Work
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="w-full h-auto md:h-[35rem] flex items-center justify-center">
        <Carousel/>
      </div>
    </section>
  );
};

export default Projects;
