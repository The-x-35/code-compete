import React, { useState } from 'react';
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

const Hero: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, isOpen: true }));
	};
  return (
    <div>
      <section className="relative max-h-screen bg-black pt-12 overflow-hidden sm:pt-16">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-normal tracking-widest uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 text-2xl">
                Code. Submit. Succeed.
              </span>
            </p>
            <h1 className="mt-8 text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Simplifying online coding assessments with precision and ease
            </h1>
            <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
              <div className="relative inline-flex items-center justify-center sm:w-auto group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <button
                  className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  onClick={handleClick}
                >
                  Start test!
                </button>
              </div>
            </div>
          </div>
          <div className="relative mt-5 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-5 lg:mt-5">
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
              <svg
                className="blur-3xl filter"
                style={{ filter: 'blur(64px)' }}
                width="645"
                height="413"
                viewBox="0 0 645 413"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                  fill="url(#d)"
                />
                <defs>
                  <linearGradient
                    id="d"
                    x1="665.741"
                    y1="178.506"
                    x2="296.286"
                    y2="474.62"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} />
                    <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full opacity-50"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                alt=""
              />
            </div>
            <img
              className="relative w-full max-w-5xl mx-auto rounded-2xl"
              src="/hero.png"
              alt="Problem Page"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
