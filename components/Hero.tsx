"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroValues } from "@/constants";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 md:pt-10 lg:pt-36 pb-0 p-8 padding-x gap-18 ">
        <h1 className="hero__title">FIND CLOTHES THAT MATCH YOUR STYLE</h1>

        <p className="hero__subtitle pb-10">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Button
          variant="outline"
          className="bg-dark-500 text-light-800 hover:bg-dark-400 w-full md:w-1/4"
        >
          Shop Now
        </Button>
        <div className="flex flex-wrap w-full gap-[64px] pt-14">
          {HeroValues.map((item, index) => (
            <div key={index}>
              <p className="font-bold text-3xl md:text-5xl">{item.value}</p>
              <p className="text-sm md:text-md text-black text-opacity-60">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__image-container h-[400px] md:h-fit">
        <div className="hero__image">
          <Image
            src="/assets/images/HeroBackground@2x.png"
            alt="hero"
            width={740}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
