import React, { useEffect } from "react";

const AboutPara = () => {
  useEffect(() => {
    const turbulence = document.querySelector("#turbulence");
    let frame = 0;

    const animate = () => {
      frame += 0.035; // moderate motion speed
      const freq = 0.022 + Math.sin(frame) * 0.006; // medium wave range
      turbulence.setAttribute("baseFrequency", `${freq} ${freq}`);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-full flex justify-center">
      {/* SVG filter definition */}
      <svg style={{ width: 0, height: 0, position: "absolute" }}>
        <defs>
          <filter id="wave-filter" colorInterpolationFilters="sRGB">
            <feTurbulence
              id="turbulence"
              type="fractalNoise"
              baseFrequency="0.022"
              numOctaves="2"
              seed="8"
            />
            <feDisplacementMap
              in="SourceGraphic"
              scale="6"  // medium intensity
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Animated Text */}
      <h1
        className="mt-3 max-sm:mt-5 max-sm:px-3 text-[18px] font-mono  max-sm:text-sm text-center tracking-normal inter leading-6 text-gray-500"
        style={{
          filter: "url(#wave-filter)",
        }}
      >
        21, I experiment, fail fast, and build faster
      
        into code, systems, and anything that bends limits.
        <br />
        driven by curiosity, creation, and chaos.
        <br />
        on the endless road to mastery.
      </h1>
    </div>
  );
};

export default AboutPara;
