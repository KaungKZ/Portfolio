import React, { useState } from "react";
import waves from "../assets/images/waves.svg";
import aboutBg from "../assets/images/about-bg.png";
import skillsBg1 from "../assets/images/skills-bg-1.png";
import skillsBg2 from "../assets/images/skills-bg-2.png";
import projectsBg from "../assets/images/projects-bg.png";
import figma from "../assets/images/skills-figma.png";
import gatsby from "../assets/images/skills-gatsby.png";
import git from "../assets/images/skills-git.png";
import js from "../assets/images/skills-js.png";
import nextjs from "../assets/images/skills-nextjs.png";
import react from "../assets/images/skills-react.png";
import scss from "../assets/images/skills-scss.png";
import tailwind from "../assets/images/skills-tailwind.png";
import stackoverflow from "../assets/images/skills-stackoverflow.png";
import stackoverflowText from "../assets/images/stackoverflow-text.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
import headerBg1 from "../assets/images/header-bg-1.png";
import headerBg2 from "../assets/images/header-bg-2.png";
import Contact from "./Contact";
import { data } from "../data/data";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [headerRef, headerInview] = useInView({
    //   /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  const [aboutRef, aboutInview] = useInView({
    //   /* Optional options */
    threshold: [0.35],
    triggerOnce: true,
  });
  const [skillsRef, skillsInview] = useInView({
    //   /* Optional options */
    threshold: [0.35],
    triggerOnce: true,
  });
  const [projectsRef, projectsInview] = useInView({
    //   /* Optional options */
    threshold: [0.25],
    triggerOnce: true,
  });

  const [projects] = useState(data);

  const swiperRef = React.useRef(null);
  const skillImages = [
    { name: "react", img: react },
    { name: "tailwind", img: tailwind },
    { name: "nextjs", img: nextjs },
    { name: "scss", img: scss },
    { name: "git", img: git },
    { name: "javascript", img: js },
    { name: "figma", img: figma },
    { name: "gatsby", img: gatsby },
    { name: "stackoverflow", img: stackoverflow },
  ];

  return (
    <main className="all-content-wrapper">
      <header
        className={`header pt-28 pb-48 ${headerInview ? "inview" : ""}`}
        ref={headerRef}
      >
        <div className="header__container section-fixed-width relative">
          <img src={waves} alt="header-wave" className="header__wave wave-1 " />
          <Parallax x={["200px", "-100px"]} tagOuter="div">
            <img src={headerBg1} alt="" className="absolute header__bg bg-1" />
          </Parallax>
          <h1 className="text-9xl text-primary-default font-bold font-default">
            I&#8217;m Kaung.
          </h1>
          <h3 className="text-2.5xl text-text-white mt-8 mb-12 leading-relaxed max-w-[700px] font-default ">
            Based in{" "}
            <a
              className="underline decoration-wavy decoration-primary-default"
              href="https://goo.gl/maps/QoUXopz3jCQNFYBo8"
              target="_blank"
              rel="noreferrer"
            >
              Myanmar
            </a>
            , I’m Frontend developer and I make cool websites.
          </h3>
          <div className="header__contact group inline-flex arrow-button">
            <a
              href="/"
              className="header__contact-link text-xl items-end after::bg-primary-default"
              onClick={(e) => {
                let contactSection = document.querySelector("#contact");
                e.preventDefault(); // Stop Page Reloading
                contactSection &&
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              Get in touch with me
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
            </a>
          </div>
          <Parallax x={["0px", "70px"]} tagOuter="div">
            <img src={headerBg2} alt="" className="absolute header__bg bg-2" />
          </Parallax>
          <img src={waves} alt="header-wave" className="header__wave wave-2" />
        </div>
      </header>
      <section
        className={`about mt-12 bg-gray-darker mb-40 ${
          aboutInview ? "inview" : ""
        }`}
        ref={aboutRef}
      >
        <div className="line-wrapper section-fixed-width relative py-20">
          <div className="section-title">
            <h4>A little bit about me</h4>
          </div>
          <div className="about__container flex z-10 relative">
            <div className="w-3/5 mr-20 about__left">
              <div className="mb-9 text-xl">
                <p className="text-text-white text-xl leading-relaxed">
                  Since 2019, I’ve been learning web development with different
                  technologies and working for companies and individuals around
                  south east asia. Throughout the journey, I met and learnt from
                  amazing and ambitious people.
                </p>
                <br />
                <p className="text-text-white text-xl leading-relaxed">
                  I'm interested in the entire frontend workflow and working on
                  ambitious projects with positive and open-minded people.
                </p>
              </div>
              <div className="about__getintouch group inline-flex arrow-button">
                <a
                  href="/"
                  className="after::bg-primary-default text-base items-center font-semibold"
                  onClick={(e) => {
                    let contactSection = document.querySelector("#contact");
                    e.preventDefault(); // Stop Page Reloading
                    contactSection &&
                      contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  Let’s make something special
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-4"
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
                </a>
              </div>
            </div>
            <div className="w-2/5 -mt-12 flex flex-col justify-between text-center about__right">
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
          <img
            src={aboutBg}
            alt="about-background"
            className="absolute about__bg"
          />
        </div>
      </section>
      <section
        className={`skills pb-56 ${skillsInview ? "inview" : ""}`}
        ref={skillsRef}
      >
        <div className="skills__wrapper section-fixed-width relative">
          <div className="section-title">
            <h4>I'm good at these</h4>
          </div>
          <div className="skills__container grid">
            {skillImages.map((v, i) => {
              return (
                <div
                  className="skill relative flex items-end"
                  key={i}
                  data-label={v.name}
                >
                  <img
                    src={v.img}
                    alt="skill-tech"
                    className="skill-photo"
                    width="85"
                  />
                  {i + 1 === skillImages.length && (
                    <div className="absolute stackoverflow-text w-[200px]">
                      <img
                        src={stackoverflowText}
                        alt="stackoverflow-text"
                        width="200"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <img
            src={skillsBg1}
            alt="skills-background"
            className="skills__bg bg-1 absolute"
          />
          <img
            src={skillsBg2}
            alt="skills-background"
            className="skills__bg bg-2 absolute"
          />
        </div>
      </section>
      <section
        className={`projects pb-52 ${projectsInview ? "inview" : ""}`}
        ref={projectsRef}
      >
        <div className="projects__wrapper relative">
          <div className="title-wrapper section-fixed-width">
            <div className="section-title">
              <h4>Some of my Favourite projects</h4>
            </div>
          </div>

          <div className="projects__slider-wrapper w-full">
            <Swiper
              ref={swiperRef}
              spaceBetween={1}
              slidesPerView={2.4}
              centeredSlides="true"
              slidesPerGroup={1}
              // initialSlide={1}
              speed={800}
              // roundLengths="true"
              loopAdditionalSlides={30}
              // loopedSlides={4}
              // loopAdditionalSlides={100}
              // observer={true}
              loop="true"
              className="projects__slider"
              breakpoints={{
                1281: {
                  spaceBetween: 90,
                },
                1025: {
                  spaceBetween: 50,
                  slidesPerView: 2.2,
                },
                768: {
                  spaceBetween: 50,
                  slidesPerView: 1.6,
                },
                601: {
                  spaceBetween: 50,
                  slidesPerView: 1.3,
                },

                361: {
                  spaceBetween: 50,
                  slidesPerView: 1.1,
                },

                0: {
                  spaceBetween: 50,
                  slidesPerView: 1.1,
                },
              }}
            >
              {projects.map((project, i) => {
                return (
                  <SwiperSlide key={project.id}>
                    <div
                      className={`projects__slide relative after:bg-[${project.thumbnailBg}]`}
                    >
                      <div className="wrapper">
                        <div className="thumbnail z-10 relative">
                          <img
                            src={require("../assets/images/" +
                              project.thumbnailBanner)}
                            alt="project-thubnail"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="projects__summary opacity-0 absolute top-0 left-0 w-full h-28 flex flex-col justify-center items-center z-10">
                      <Link
                        to={`/projects/${project.slug}`}
                        state={{
                          prevProject:
                            i === 0
                              ? projects[projects.length - 1].slug
                              : projects[i - 1].slug,
                          nextProject:
                            i === projects.length - 1
                              ? projects[0].slug
                              : projects[i].slug,
                        }}
                        className="border-button-large text-text-white"
                      >
                        Check out this project
                        <svg>
                          <rect
                            x="0"
                            y="0"
                            fill="none"
                            className="stroke-[#ffffff]"
                            width="100%"
                            height="100%"
                          />
                        </svg>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
              <div
                id="previousButton"
                className="absolute top-2/4 left-16 z-10 projects__navigation previous border-2 border-primary-dark bg-[#fff]"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <div className="wrapper flex justify-center items-center flex-col h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#4BB188"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 -mt-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#4BB188"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </div>
              </div>
              <div
                id="nextButton"
                className="absolute top-2/4 right-16 z-10 projects__navigation next bg-primary-dark"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <div className="wrapper flex justify-center items-center flex-col h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 -mt-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </div>
              </div>
            </Swiper>
          </div>
          <img src={projectsBg} alt="" className="absolute projects__bg" />
        </div>
      </section>
      <Contact></Contact>
    </main>
  );
}
