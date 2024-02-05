import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import ProjectBtn from "./ProjectBtn";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4f4fd8]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          {/* <div className="flex gap-5 items-center">
            <h1 className="text-xl font-medium ">Hello &lt; Visitors &gt;</h1>
            <img
              src="src\assets\Hi.gif"
              width={30}
              height={30}
              alt="hand gif"
            />
          </div> */}

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="name-gradient">
              Adesh <span className="hidden xl:inline">Salsundar</span>
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 max-w-3xl text-white-100`}>
            Web Developer, I develop user-centric and visually appealing
            websites.
          </p>
          <ProjectBtn />
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute lg:bottom-10 max-lg:bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
