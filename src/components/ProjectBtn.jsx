import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { adeshresume } from "../assets";

const ProjectBtn = () => {
  return (
    <div className="flex gap-10 justify-start items-center">
      {/* <Link
        to="/projects"
        className="relative w-[95px] h-[95px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <img
          src="src/assets/rounded-text.png"
          width={141}
          height={148}
          alt="Projects btn"
          className="animate-spin-slow cursor-pointer w-full h-full max-w-[65px] max-h-[72px] "
        />
        <HiArrowRight className="absolute text-3xl group-hover:translate-x-2 transition-all duration-300" />
      </Link> */}

      {/* Resume Button */}

      <div className="flex items-center justify-center lg:mt-10 mt-5 max-sm:static max-lg:absolute max-lg:right-[50px] max-lg:top-1">
        <div className="relative flex w-full cursor-pointer items-center overflow-hidden rounded-xl  p-[2.5px]">
          <div className="animate-rotate absolute inset-0 rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
          <div className="relative flex rounded-[0.60rem] bg-slate-900">
            <a
              href={adeshresume}
              download
              className="cursor-pointer z-10"
              onClick={(e) => {
                e.preventDefault();
                window.open(adeshresume, "_blank");
              }}
            >
              <span className="relative cursor-pointer block rounded-lg bg-slate-900 max-sm:px-6 max-sm:py-2 px-8 py-3 text-center max-sm:text-[16px] text-[20px] font-semibold text-white-100 shadow-2xl transition duration-200 hover:bg-slate-800">
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBtn;
