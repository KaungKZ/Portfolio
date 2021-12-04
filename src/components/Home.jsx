import React from "react";
import waves from "../images/waves.svg";
import aboutBg from "../images/about-bg.png";
import figma from "../images/skills-figma.png";
import gatsby from "../images/skills-gatsby.png";
import git from "../images/skills-git.png";
import js from "../images/skills-js.png";
import nextjs from "../images/skills-nextjs.png";
import react from "../images/skills-react.png";
import scss from "../images/skills-scss.png";
import tailwind from "../images/skills-tailwind.png";
import stackoverflow from "../images/skills-stackoverflow.png";

export default function Home() {
  const skillImages = [
    react,
    tailwind,
    nextjs,
    scss,
    git,
    js,
    figma,
    gatsby,
    stackoverflow,
  ];

  return (
    <>
      <header className="header pt-28 pb-48 relative">
        <img src={waves} alt="" className="header__wave wave-1 " />
        <div className="header__container w-10/12 section-fixed-width ">
          <h1 className="text-9xl text-primary-default font-bold font-default">
            I&#8217;m Kaung.
          </h1>
          <h3 className="text-2.5xl text-text-white mt-8 mb-12 leading-relaxed max-w-[700px] font-default">
            Based in Myanmar, I’m Frontend developer and I make cool websites.
          </h3>
          <div className="header__contact group inline-flex items-end">
            <a
              href=""
              className="header__contact-link text-primary-default text-xl font-title whitespace-nowrap transition-all duration-300 after:transition-all after:duration-300"
            >
              Get in touch with me
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-4"
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
      <section className="about mt-20 bg-gray-darker mb-40">
        <div className="line-wrapper section-fixed-width relative py-20">
          <div className="section-title">
            <h4>A little bit about me</h4>
          </div>
          <div className="about__container flex z-10 relative">
            <div className="w-3/5 mr-20">
              <div className="mb-9 text-xl">
                <p className="text-text-white text-xl leading-relaxed">
                  Since 2019, I’ve been learning web development with different
                  technologies and working for companies and individuals around
                  the globe. Throughout the journey, I met and learnt from
                  amazing and ambitious people.
                </p>
                <br />
                <p className="text-text-white text-xl leading-relaxed">
                  Interested in the entire frontend spectrum and working on
                  ambitious projects with positive people.
                </p>
              </div>
              <div className="text-primary-default">
                <a href="">Let’s make something special</a>
              </div>
            </div>
            <div className="w-2/5 -mt-12 flex flex-col justify-between">
              <div className="about__exp mb-8">
                <h1 className="text-primary-default text-8xl font-bold font-title">
                  2+
                </h1>
                <span className="text-text-white text-xl mt-2 block">
                  years of experience
                </span>
              </div>
              <div className="about__projects">
                <h1 className="text-primary-default text-8xl font-bold font-title">
                  8+
                </h1>
                <span className="text-text-white text-xl mt-2 block">
                  projects and still counting
                </span>
              </div>
            </div>
          </div>
          <img src={aboutBg} alt="" className="absolute about__bg" />
        </div>
      </section>
      <section className="skills">
        <div className="skills__wrapper section-fixed-width">
          <div className="section-title">
            <h4>I'm good at these</h4>
          </div>
          <div className="skills__container grid">
            {skillImages.map((v) => {
              return (
                <div className="skill">
                  <img
                    src={v}
                    alt="skill-technology"
                    className="skill-photo"
                    width="85"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="projects"></section>
      <section className="contact"></section>
    </>
  );
}
