import React, { useEffect, useState } from "react";
import proimg from "../../assets/profile3.png";
import BlurText from "../animation/Blurtext";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Home = () => {
  const [showHii, setShowHii] = useState(false);
  // const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    // Auto-appear
    const timer1 = setTimeout(() => setShowHii(true), 2000);
    // const timer2 = setTimeout(() => setShowMsg(true), 4000);

    // Auto-hide after short duration
    const hide1 = setTimeout(() => setShowHii(false), 6000);
    // const hide2 = setTimeout(() => setShowMsg(false), 8000);

    return () => {
      clearTimeout(timer1);
      // clearTimeout(timer2);
      clearTimeout(hide1);
      // clearTimeout(hide2);
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-5 pt-44 max-sm:pt-36">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">
        {/* profile image */}
        <div className="relative group">
          <a href="#">
            <img
              className="w-32 transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              src={proimg}
              alt="Profile"
            />
          </a>

          {/* Hii bubble */}
          <span
            className={`absolute w-auto px-3 py-1 text-white bg-black rounded-lg text-sm font-medium left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out shadow-lg
            ${
              showHii
                ? "opacity-100 translate-x-20 -translate-y-12"
                : "opacity-0 translate-x-0 translate-y-0"
            }
            group-hover:opacity-100 group-hover:translate-x-20 group-hover:-translate-y-12`}
          >
            Hii
          </span>

          {/* Msg me button */}
          {/* <a
          //  href="https://x.com/intent/follow?screen_name=Deepesh211103"
           >
            <button
              className={`absolute w-full cursor-pointer font-PoiretOne  text-xl text-black flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out delay-100 hover:scale-115 hover:underline [text-shadow:0_4px_6px_rgba(0,0,0,0.2)]
              ${
                showMsg
                  ? "opacity-100 translate-x-18 -translate-y-10"
                  : "opacity-0 translate-x-0 translate-y-0"
              }
              group-hover:opacity-100 group-hover:translate-x-20 group-hover:-translate-y-12`}
            >
              Msg me!
            </button>
          </a> */}
        </div>

        {/* intro text */}
        <div className="mt-4 px-32 max-sm:px-4 text-center">
          <BlurText
            text="I'm Deepesh"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[3rem] font-GingerBrand mt-2 max-sm:text-[1.6rem] font-bold tracking-tighters inline-block"
          />


          <div className="relative w-full flex justify-center">
      <h1
        className="mt-3 max-sm:mt-5 max-sm:px-[2px] text-[15px] font-mono max-sm:text-sm text-center tracking-normal inter leading-8 max-sm:leading-6 text-gray-500"
      >
        A Frontend Developer focused on building modern and scalable web experiences.
        <br />
       I work with React and modern UI tools to create clean interfaces, reusable components, and smooth interactions.
        <br />
        Curious by nature. Builder by choice.
      </h1>
    </div>
        </div>

        {/* buttons */}
        <div className="mt-9 flex gap-4">
          <a href="#">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors bg-black text-white shadow hover:bg-black/60 h-9 px-4 py-2 rounded-lg cursor-pointer">
              Get in Touch
            </button>
          </a>

          <a href="#">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors bg-black text-white shadow hover:bg-white/70 hover:text-black h-9 px-4 py-2 rounded-lg cursor-pointer">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
