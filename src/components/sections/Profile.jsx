import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import aboutData from "../data/aboutData";

const Profile = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 700,
      easing: "ease-in-out",
      opacity: 0,
      scale: 0.9,
      reset: false,
    });

    // Title animation
    sr.reveal(".profile-title", {
      origin: "top",
      delay: 200,
    });

    // Animate each timeline block separately
    aboutData.forEach((_, i) => {
      const selector = `.timeline-item-${i}`;
      const sideClass = i % 2 === 0 ? "left" : "right";
      sr.reveal(selector, {
        origin: sideClass,
        delay: i * 200, // each appears one after another
      });
    });

    // Dots
    sr.reveal(".timeline-dot", {
      scale: 0.6,
      opacity: 0,
      interval: 150,
      delay: 300,
    });
  }, []);

  return (
    <section className="relative w-full font-Caveat max-w-5xl mx-auto my-24 mt-36 max-sm:mt-28 px-4">
      {/* Dotted vertical line */}
      <div className="absolute left-1/2 top-30 h-full border-l-2 border-dashed border-gray-400 -translate-x-1/2"></div>

      {/* Title */}
      <h1 className="profile-title text-[2.6rem] max-sm:text-[1.8rem] font-semibold tracking-tight text-center mb-16 max-sm:mb-8">
        Evolution 
      </h1>

      {aboutData.map((year, index) => (
        <div
          key={year.year}
          className={`timeline-item-${index} mb-20 max-sm:mb-10 flex relative ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`w-1/2 ${
              index % 2 === 0
                ? "pr-8 text-right"
                : "pl-8 text-left"
            }`}
          >
            <img className="w-72" src={year.img} alt="" />
            <h2 className="text-3xl font-semibold text-gray-900">{year.year}</h2>
            <ul className="mt-4 text-gray-600 space-y-3">
              {year.data.map((point, i) => (
                <li
                  key={i}
                  className="text-[30px] max-sm:text-[20px] text-gray-500"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Dot */}
          <div className="timeline-dot absolute left-1/2 top-5 w-4 h-4 bg-gray-800 rounded-full border-4 border-white z-10 -translate-x-1/2"></div>
        </div>
      ))}
    </section>
  );
};

export default Profile;
