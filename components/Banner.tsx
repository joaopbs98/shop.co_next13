"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  const logosRef = React.useRef<HTMLElement | null>(null); // Specify the type as HTMLElement | null

  useEffect(() => {
    const logos = logosRef.current;
    if (logos) {
      const duplicateLogos = logos.cloneNode(true) as HTMLElement; // Cast duplicateLogos to HTMLElement
      logos.insertAdjacentHTML("afterend", duplicateLogos.outerHTML); // Use insertAdjacentHTML
      duplicateLogos.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="w-full bg-black w-screen absolute py-4 left-0 inline-flex flex-nowrap overflow-hidden mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)">
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <Image
            src="/assets/images/calvin_klein.svg"
            width={206}
            height={33.35}
            alt="logo"
            className="defaults"
          />
        </li>
        <li>
          <Image
            src="/assets/images/gucci.svg"
            width={206}
            height={33.35}
            alt="logo"
            className="defaults"
          />
        </li>
        <li>
          <Image
            src="/assets/images/prada.svg"
            width={206}
            height={33.35}
            alt="logo"
            className="defaults"
          />
        </li>
        <li>
          <Image
            src="/assets/images/zara.svg"
            width={206}
            height={33}
            alt="logo"
            className="defaults"
          />
        </li>
        <li>
          <Image
            src="/assets/images/versace.svg"
            width={206}
            height={33.35}
            alt="logo"
            className="defaults"
          />
        </li>
      </ul>
    </div>
  );
};

export default Banner;
