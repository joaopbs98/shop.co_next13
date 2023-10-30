"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  useEffect(() => {
    const duplicateList = () => {
      const ul = document.getElementById("logos");
      if (ul) {
        const duplicateUl = ul.cloneNode(true) as HTMLElement;
        ul.insertAdjacentElement("afterend", duplicateUl);
        duplicateUl.setAttribute("aria-hidden", "true");
      }
    };

    duplicateList();
  }, []);

  return (
    <div
      className="w-full bg-black w-screen absolute py-4 left-0 inline-flex flex-nowrap overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
      }}
    >
      <ul
        id="logos"
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
            alt "logo"
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
