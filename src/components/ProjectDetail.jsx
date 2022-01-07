import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import Contact from "./Contact";
import headerBg1 from "../assets/images/header-bg-1.png";
import headerBg2 from "../assets/images/header-bg-2.png";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

// import { useEffect } from "react";

export default function ProjectDetail() {
  const [width, height] = useWindowSize();
  // const [description, setDescription] = useState();

  // console.log(width);
  // let params = useParams();
  const location = useLocation();

  // useEffect(() => {
  //   setDescription(detail.description);
  // }, []);

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  // useEffect(() => {
  //   if (width <= 768) {
  //     setDescription(detail.description.substring(0, 600).concat(" .."));
  //   }
  // }, [width]);

  if (!location.state) {
    return <Navigate to="/" replace />;
  }

  const { detail } = location.state;
  // useEffect(() => {
  //   console.log("nah");
  // }, []);

  return (
    <>
      <section className="pdetail mt-16 mb-32">
        <div className="pdetail__wrapper section-fixed-width">
          <div className="pdetail__banner relative -ml-8">
            <img src={headerBg1} alt="" className="absolute pdetail__bg bg-1" />
            <img
              src={require("../assets/images/" + detail.mainBanner).default}
              alt={detail.name}
              width="940"
              className="mx-auto"
            />
            <img src={headerBg2} alt="" className="absolute pdetail__bg bg-2" />
          </div>
          <div className="pdetail__content mt-12">
            <div className="pdetail__name flex items-end">
              <h1 className="text-text-white text-5xl font-title font-bold mr-4">
                {detail.name}
                <div className="text-text-white text-sm py-1 px-6 bg-gray-dark rounded font-semibold ml-6 inline">
                  {detail.finishedDate}
                </div>
              </h1>
            </div>
            <div className="pdetail__view mt-12">
              <div className=" group inline-flex arrow-button mr-12">
                <a
                  href={detail.githubURL}
                  className="after::bg-primary-default text-lg items-center font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source Code
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="h-5 w-5 ml-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0V0ZM12.6358 18.1525H12.5583C12.5001 18.1558 12.4419 18.1471 12.3871 18.1271C12.3324 18.107 12.2823 18.076 12.24 18.0358C12.2009 17.9945 12.1705 17.9458 12.1504 17.8926C12.1304 17.8394 12.1212 17.7827 12.1233 17.7258V16.5542C12.1283 16.165 12.1317 15.7708 12.1317 15.3742C12.1303 15.0841 12.0879 14.7957 12.0058 14.5175C11.9281 14.2363 11.7713 13.9832 11.5542 13.7883C12.135 13.7323 12.706 13.6003 13.2525 13.3958C13.7135 13.2205 14.1305 12.9463 14.4742 12.5925C14.8133 12.2367 15.0658 11.8067 15.2117 11.3375C15.3891 10.7629 15.4735 10.1637 15.4617 9.5625C15.4649 9.14273 15.3915 8.72589 15.245 8.3325C15.0961 7.936 14.8711 7.57249 14.5825 7.2625C14.6448 7.10615 14.6901 6.94355 14.7175 6.7775C14.745 6.61083 14.7592 6.4425 14.7592 6.27417C14.7592 6.0575 14.7342 5.84083 14.6842 5.63C14.6387 5.41375 14.5772 5.20121 14.5 4.99417C14.4705 4.98267 14.4391 4.97701 14.4075 4.9775H14.3158C14.1242 4.97917 13.9358 5.01083 13.7542 5.07C13.5541 5.12841 13.3583 5.20081 13.1683 5.28667C12.9794 5.37134 12.7955 5.46678 12.6175 5.5725C12.4383 5.67833 12.28 5.78 12.14 5.87417C10.7381 5.48344 9.25606 5.48344 7.85417 5.87417C7.69782 5.76964 7.53888 5.66906 7.3775 5.5725C7.19697 5.4659 7.00994 5.37071 6.8175 5.2875C6.62805 5.1988 6.43154 5.12605 6.23 5.07C6.05192 5.01117 5.86587 4.97997 5.67833 4.9775H5.58667C5.55532 4.97706 5.52419 4.98272 5.495 4.99417C5.41672 5.2015 5.35268 5.41394 5.30333 5.63C5.25833 5.84167 5.23667 6.0575 5.23583 6.27417C5.23583 6.4425 5.25 6.61083 5.27833 6.7775C5.30583 6.94333 5.35 7.10583 5.41167 7.2625C5.12382 7.5729 4.8996 7.9367 4.75167 8.33333C4.6044 8.72659 4.53013 9.14341 4.5325 9.56333C4.52084 10.1613 4.60295 10.7574 4.77583 11.33C4.92667 11.7992 5.17833 12.23 5.5125 12.5933C5.85833 12.945 6.275 13.2183 6.73417 13.3967C7.27833 13.605 7.84833 13.7383 8.42833 13.7933C8.26639 13.9401 8.13793 14.12 8.05167 14.3208C7.96961 14.5194 7.91359 14.7278 7.885 14.9408C7.57923 15.0872 7.24483 15.1641 6.90583 15.1658C6.59101 15.1784 6.28029 15.0909 6.01833 14.9158C5.76703 14.7296 5.55422 14.4964 5.39167 14.2292C5.31892 14.1169 5.23756 14.0105 5.14833 13.9108C5.0542 13.806 4.95041 13.7103 4.83833 13.625C4.72787 13.5425 4.60678 13.4752 4.47833 13.425C4.35196 13.3696 4.21549 13.3409 4.0775 13.3408C4.04417 13.3417 4.01083 13.345 3.9775 13.3492C3.93198 13.349 3.88662 13.3546 3.8425 13.3658C3.80372 13.376 3.76705 13.3929 3.73417 13.4158C3.71922 13.4241 3.70672 13.4361 3.69793 13.4508C3.68915 13.4654 3.6844 13.4821 3.68417 13.4992C3.68767 13.5393 3.69993 13.5781 3.72009 13.613C3.74025 13.6478 3.76781 13.6778 3.80083 13.7008C3.87833 13.7625 3.9425 13.81 3.99417 13.8433L4.01917 13.8608C4.13 13.9467 4.23667 14.0392 4.3375 14.1383C4.43083 14.22 4.515 14.3125 4.5875 14.4133C4.6625 14.5125 4.7275 14.6183 4.78 14.7308C4.84083 14.8425 4.905 14.9708 4.9725 15.1167C5.12917 15.5117 5.4075 15.8458 5.7675 16.0708C6.145 16.2733 6.56833 16.3742 6.9975 16.3633C7.1425 16.3633 7.28833 16.355 7.4325 16.3383C7.57583 16.315 7.71833 16.2908 7.86167 16.2625V17.715C7.86426 17.7736 7.85447 17.832 7.83293 17.8865C7.81139 17.9411 7.77858 17.9904 7.73666 18.0314C7.69474 18.0724 7.64464 18.104 7.58965 18.1243C7.53465 18.1446 7.47599 18.1531 7.4175 18.1492H7.36583C5.42253 17.5214 3.76722 16.2204 2.69797 14.4805C1.62873 12.7406 1.2158 10.6761 1.53357 8.65881C1.85133 6.6415 2.8789 4.80392 4.43123 3.47697C5.98356 2.15002 7.95865 1.42089 10.0008 1.42089C12.043 1.42089 14.0181 2.15002 15.5704 3.47697C17.1228 4.80392 18.1503 6.6415 18.4681 8.65881C18.7859 10.6761 18.3729 12.7406 17.3037 14.4805C16.2344 16.2204 14.5791 17.5214 12.6358 18.1492V18.1533V18.1525Z"
                      fill="#58D9A5"
                    />
                  </svg>
                </a>
              </div>
              <div className=" group inline-flex arrow-button">
                <a
                  href={detail.projectURL}
                  className="after::bg-primary-default text-lg items-center font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Site
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-5 w-5 ml-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 9.99999C18.3332 5.39762 14.6022 1.66666 9.99984 1.66666C5.39746 1.66666 1.6665 5.39762 1.6665 9.99999C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333Z"
                      stroke="#58D9A5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66634 9.99999C6.66634 14.6024 8.15873 18.3333 9.99967 18.3333C11.8406 18.3333 13.333 14.6024 13.333 9.99999C13.333 5.39762 11.8406 1.66666 9.99967 1.66666C8.15873 1.66666 6.66634 5.39762 6.66634 9.99999Z"
                      stroke="#58D9A5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.6665 10H18.3332"
                      stroke="#58D9A5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="pdetail__description mt-12">
              <p
                className="text-[#F3F4F6] text-lg leading-loose"
                dangerouslySetInnerHTML={{ __html: detail["description"] }}
              ></p>
            </div>
            <div className="pdetail__techstack mt-12">
              <h3 className="text-text-white text-xl font-bold">Techstacks</h3>
              <div className="">
                {detail.techstacks.map((stack, i) => {
                  return (
                    <span
                      className="uppercase text-text-white text-sm py-1 px-4 bg-gray-dark rounded mr-4 last:mr-0"
                      key={i}
                    >
                      {stack}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          {/* call contact component  */}
        </div>
      </section>
      <Contact></Contact>
    </>
  );
}
