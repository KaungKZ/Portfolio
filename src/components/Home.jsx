import React, { useState, useEffect } from "react";
import waves from "../images/waves.svg";
import aboutBg from "../images/about-bg.png";
import skillsBg1 from "../images/skills-bg-1.png";
import skillsBg2 from "../images/skills-bg-2.png";
import projectsBg from "../images/projects-bg.png";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import whatsapp from "../images/whatsapp.svg";
import { Formik, useFormik } from "formik";
import emailjs, { send } from "emailjs-com";

// SwiperCore.use([Navigation]);

export default function Home() {
  // const loadData = () => JSON.parse(JSON.stringify(jsonData));
  const [projects, setProjects] = useState([]);
  const [centerSlideWidth, setCenterSlideWidth] = useState();
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

  // Synchronous validation
  const validate = (
    values,
    props /* only available when using withFormik */
  ) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      emailjs
        .send(
          process.env.REACT_APP_email_service_id,
          process.env.REACT_APP_email_template_id,
          values,
          process.env.REACT_APP_email_user_id
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.errors);

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
              className="header__contact-link line-button text-primary-default whitespace-nowrap after::bg-primary-default"
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
      <section className="skills pb-56">
        <div className="skills__wrapper section-fixed-width relative">
          <div className="section-title">
            <h4>I'm good at these</h4>
          </div>
          <div className="skills__container grid">
            {skillImages.map((v, i) => {
              return (
                <div className="skill relative flex items-end">
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
      <section className="projects pb-56">
        <div className="projects__wrapper relative">
          <div className="title-wrapper section-fixed-width">
            <div className="section-title">
              <h4>Some of my Favourite projects</h4>
            </div>
          </div>

          <div className="projects__slider-wrapper w-full">
            <Swiper
              ref={swiperRef}
              spaceBetween={90}
              slidesPerView={2.4}
              centeredSlides="true"
              slidesPerGroup={1}
              initialSlide={3}
              speed={800}
              // observer={true}
              loop={true}
              className="projects__slider"
              breakpoints={{
                1280: {
                  spaceBetween: 90,
                },
                1024: {
                  spaceBetween: 50,
                  slidesPerView: 2.2,
                },
                600: {
                  spaceBetween: 50,
                  slidesPerView: 1.5,
                },
              }}
            >
              {projects.map((project) => {
                // console.log(project.thumbnailBanner);
                return (
                  <SwiperSlide key={project.id}>
                    <div
                      className={`projects__slide relative after:bg-[${project.thumbnailBg}]`}
                    >
                      <div className="wrapper">
                        <div className="thumbnail z-10 relative">
                          <img src={project.thumbnailBanner} />
                        </div>
                      </div>
                    </div>
                    <div className="projects__summary opacity-0 absolute top-0 left-0 w-full h-28 flex flex-col justify-center items-center z-10">
                      {/* <h1 className="text-text-white font-title text-4xl font-bold">
                        {project.name}
                      </h1> */}
                      <a className="border-button-large text-text-white">
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
                      </a>
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
      <section className="contact mt-12">
        <div className="contact__wrapper section-fixed-width relative">
          <div className="section-title">
            <h4>Let’s make something special</h4>
          </div>
          <div className="contact__content flex">
            <div className="left w-1/2 mr-32">
              <h1 className="content-title text-text-white text-5xl capitalize font-bold ">
                Keep in touch with me
              </h1>
              <div className="contact__socialmedias my-14">
                <div className="row flex items-end mb-14 last:mb-0">
                  <div className="link-icon mr-5">
                    <img src={twitter} alt="twitter" className="" />
                  </div>
                  <div className="detail flex flex-col">
                    <h3 className="">I'm active here</h3>
                    <a href="#" className="">
                      @KaungKZ2000
                    </a>
                  </div>
                </div>
                <div className="row flex items-end mb-14 last:mb-0">
                  <div className="link-icon mr-5">
                    <img src={github} alt="github" className="" />
                  </div>
                  <div className="detail flex flex-col">
                    <h3 className="">Check out my projects</h3>
                    <a href="#" className="">
                      KaungKZ
                    </a>
                  </div>
                </div>
                <div className="row flex items-end mb-14 last:mb-0">
                  <div className="link-icon mr-5">
                    <img src={linkedin} alt="linkedin" className="" />
                  </div>
                  <div className="detail flex flex-col">
                    <h3 className="">See my career</h3>
                    <a href="#" className="">
                      KaungKZ
                    </a>
                  </div>
                </div>
                <div className="row flex items-end mb-14 last:mb-0">
                  <div className="link-icon mr-5">
                    <img src={whatsapp} alt="whatsapp" className="" />
                  </div>
                  <div className="detail flex flex-col">
                    <h3 className="">Chat with me</h3>
                    <a href="#" className="">
                      +95 99 57784841
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right w-1/2">
              <h1 className="content-title text-text-white text-5xl capitalize font-bold">
                Let me know here
              </h1>
              <div className="contact__form  my-14">
                <form onSubmit={formik.handleSubmit} noValidate>
                  <div className="name input-field">
                    {formik.errors.name === "Required" && (
                      <div className="text-primary-default font-sm mb-2">
                        This field cannot be empty
                      </div>
                    )}
                    <div className="wrapper relative">
                      <input
                        id="name"
                        placeholder="Enter your name"
                        name="name"
                        type="text"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                      <svg
                        width="32"
                        height="32"
                        className="icon"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.9999 16.0001C19.6818 16.0001 22.6666 13.0153 22.6666 9.33341C22.6666 5.65152 19.6818 2.66675 15.9999 2.66675C12.318 2.66675 9.33325 5.65152 9.33325 9.33341C9.33325 13.0153 12.318 16.0001 15.9999 16.0001Z"
                          stroke="#58D9A5"
                          stroke-width="2"
                        />
                        <path
                          d="M22.6666 18.6667H23.1359C24.1107 18.667 25.0518 19.0232 25.7825 19.6685C26.5131 20.3137 26.983 21.2035 27.1039 22.1707L27.6253 26.3361C27.6721 26.7113 27.6387 27.0922 27.5271 27.4536C27.4155 27.8149 27.2284 28.1483 26.9781 28.4318C26.7278 28.7153 26.4201 28.9423 26.0753 29.0977C25.7306 29.2532 25.3567 29.3335 24.9786 29.3334H7.02125C6.64309 29.3335 6.26924 29.2532 5.92451 29.0977C5.57978 28.9423 5.27205 28.7153 5.02175 28.4318C4.77145 28.1483 4.5843 27.8149 4.47272 27.4536C4.36115 27.0922 4.32769 26.7113 4.37458 26.3361L4.89458 22.1707C5.01551 21.203 5.48581 20.3129 6.21703 19.6676C6.94825 19.0223 7.89002 18.6664 8.86525 18.6667H9.33325"
                          stroke="#58D9A5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="email input-field">
                    {formik.errors.email === "Required" ? (
                      <div className="text-primary-default font-sm mb-2">
                        This field cannot be empty
                      </div>
                    ) : formik.errors.email === "Invalid email address" ? (
                      <div className="text-primary-default font-sm mb-2">
                        Please enter valid email address
                      </div>
                    ) : null}
                    <div className="wrapper relative">
                      <input
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        type="text"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      <svg
                        width="32"
                        height="32"
                        className="icon"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V24C2 24.5304 2.21071 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6ZM25.8 8L16 14.78L6.2 8H25.8ZM4 24V8.91L15.43 16.82C15.5974 16.9361 15.7963 16.9984 16 16.9984C16.2037 16.9984 16.4026 16.9361 16.57 16.82L28 8.91V24H4Z"
                          fill="#58D9A5"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="message input-field">
                    {formik.errors.message === "Required" && (
                      <div className="text-primary-default font-sm mb-2">
                        This field cannot be empty
                      </div>
                    )}
                    <div className="wrapper relative">
                      <textarea
                        placeholder="Enter your message"
                        onChange={formik.handleChange}
                        id="message"
                        name="message"
                        required
                        value={formik.values.message}
                      />
                      <svg
                        width="32"
                        height="32"
                        className="icon"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 2C28.5304 2 29.0391 2.21071 29.4142 2.58579C29.7893 2.96086 30 3.46957 30 4V20C30 20.5304 29.7893 21.0391 29.4142 21.4142C29.0391 21.7893 28.5304 22 28 22H8.828C7.76722 22.0002 6.74997 22.4218 6 23.172L2 27.172V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H28ZM4 0C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 29.586C4.20298e-05 29.7839 0.0587852 29.9773 0.168795 30.1418C0.278804 30.3062 0.435134 30.4344 0.617999 30.5099C0.800863 30.5855 1.00204 30.6052 1.19607 30.5664C1.3901 30.5276 1.56826 30.4321 1.708 30.292L7.414 24.586C7.78899 24.2109 8.29761 24.0001 8.828 24H28C29.0609 24 30.0783 23.5786 30.8284 22.8284C31.5786 22.0783 32 21.0609 32 20V4C32 2.93913 31.5786 1.92172 30.8284 1.17157C30.0783 0.421427 29.0609 0 28 0L4 0Z"
                          fill="#58D9A5"
                        />
                        <path
                          d="M6 7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H25C25.2652 6 25.5196 6.10536 25.7071 6.29289C25.8946 6.48043 26 6.73478 26 7C26 7.26522 25.8946 7.51957 25.7071 7.70711C25.5196 7.89464 25.2652 8 25 8H7C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7ZM6 12C6 11.7348 6.10536 11.4804 6.29289 11.2929C6.48043 11.1054 6.73478 11 7 11H25C25.2652 11 25.5196 11.1054 25.7071 11.2929C25.8946 11.4804 26 11.7348 26 12C26 12.2652 25.8946 12.5196 25.7071 12.7071C25.5196 12.8946 25.2652 13 25 13H7C6.73478 13 6.48043 12.8946 6.29289 12.7071C6.10536 12.5196 6 12.2652 6 12ZM6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16H17C17.2652 16 17.5196 16.1054 17.7071 16.2929C17.8946 16.4804 18 16.7348 18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H7C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17Z"
                          fill="#58D9A5"
                        />
                      </svg>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="border-0 px-20 py-2 text-xl text-text-white contact__submit font-semibold"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
