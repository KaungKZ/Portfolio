import React, { useState, useEffect } from "react";
import waves from "../images/waves.svg";
import aboutBg from "../images/about-bg.png";
import skillsBg1 from "../images/skills-bg-1.png";
import skillsBg2 from "../images/skills-bg-2.png";
import figma from "../images/skills-figma.png";
import gatsby from "../images/skills-gatsby.png";
import git from "../images/skills-git.png";
import js from "../images/skills-js.png";
import nextjs from "../images/skills-nextjs.png";
import react from "../images/skills-react.png";
import scss from "../images/skills-scss.png";
import tailwind from "../images/skills-tailwind.png";
import stackoverflow from "../images/skills-stackoverflow.png";
import stackoverflowText from "../images/stackoverflow-text.png";
// import slide1 from "../images/skills-react.png";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import slide2 from "../images/projects-slide-2.jpg";
// import slide3 from "../images/projects-slide-3.jpg";
// import slide4 from "../images/projects-slide-4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import jsonData from "../../public/data/data.json";

// SwiperCore.use([Navigation]);

export default function Home() {
  // const loadData = () => JSON.parse(JSON.stringify(jsonData));
  const [projects, setProjects] = useState([]);
  const swiperRef = React.useRef(null);
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

  // console.log(data);

  useEffect(() => {
    fetch("data/data.json")
      .then((data) => data.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
      <header className="header pt-28 pb-48 relative">
        <img src={waves} alt="header-wave" className="header__wave wave-1 " />
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
        <img src={waves} alt="header-wave" className="header__wave wave-2" />
      </header>
      <section className="about mt-12 bg-gray-darker mb-40">
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
          <img
            src={aboutBg}
            alt="about-background"
            className="absolute about__bg"
          />
        </div>
      </section>
      <section className="skills relative pb-56">
        <img
          src={skillsBg1}
          alt="skills-background"
          className="skills__bg bg-1 absolute"
        />
        <div className="skills__wrapper section-fixed-width">
          <div className="section-title">
            <h4>I'm good at these</h4>
          </div>
          <div className="skills__container grid">
            {skillImages.map((v, i) => {
              return (
                <div className="skill relative">
                  <img
                    src={v}
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
        </div>
        <img
          src={skillsBg2}
          alt="skills-background"
          className="skills__bg bg-2 absolute"
        />
      </section>
      <section className="projects">
        <div className="projects__wrapper">
          <div className="title-wrapper section-fixed-width">
            <div className="section-title">
              <h4>Some of my Favourite projects</h4>
            </div>
          </div>

          <div className="projects__slider-wrapper w-full">
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={2.5}
              // navigation={true}
              // loopedSlides={4}
              // pagination={{ clickable: true }}
              centeredSlides="true"
              slidesPerGroup={1}
              initialSlide={1}
              // observer={true}
              loop={true}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              className="projects__slider"
              // breakpoints={{
              //   1600: {
              //     slidesPerView: 2,
              //   },
              // }}
            >
              {projects.map((project) => {
                console.log(project.thumbnailBanner);
                return (
                  <SwiperSlide key={project.id}>
                    <div
                      className={`slide-wrapper relative after:bg-[${project.thumbnailBg}]`}
                    >
                      <div className="slide-thumbnail z-10 relative">
                        <img src={project.thumbnailBanner} />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* <SwiperSlide>
                <div className={`slide-wrapper relative after:bg-[#333333]`}>
                  <div className="slide-thumbnail z-1 relative">
                    <img src={slide1} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="slide-wrapper">
                  <img src={slide1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="slide-wrapper">
                  <img src={slide1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="slide-wrapper">
                  <img src={slide1} alt="" />
                </div>
              </SwiperSlide> */}
            </Swiper>
            <div
              id="previousButton"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              ok
            </div>
            <div
              id="nextButton"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              ok2
            </div>
          </div>
        </div>
      </section>
      <section className="contact"></section>
    </>
  );
}
