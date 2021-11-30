import React from "react";
import waves from "../images/waves.svg";

export default function Home() {
  return (
    <header className="header mt-28 relative">
      <img src={waves} alt="" className="header__wave wave-1" />
      <div className="header__container w-10/12">
        <h1 className="text-9xl text-primary-default font-bold font-default">
          I&#8217;m Kaung.
        </h1>
        <h3 className="text-3xl text-text-white mt-8 mb-8 leading-relaxed w-3/4">
          Based in Myanmar, I’m Frontend developer and I make cool websites.
        </h3>
        <div className="header__contact group inline-flex items-end">
          <a
            href=""
            className="header__contact-link text-primary-default text-xl font-title whitespace-nowrap after:transition-all after:duration-300"
          >
            Get in touch with me
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:opacity-100 group-hover:w-full w-0 transition-all duration-300 ml-4 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#58d9a5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <img src={waves} alt="" className="header__wave wave-2" />
    </header>
  );
}
