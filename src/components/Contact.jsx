import React, { useState } from "react";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import contactBg from "../assets/images/contact-bg.png";
import { useInView } from "react-intersection-observer";

import { useFormik } from "formik";
import emailjs from "emailjs-com";

export default function Contact() {
  const [contactRef, contactInview] = useInView({
    //   /* Optional options */
    threshold: [0.35],
    triggerOnce: true,
  });
  const [formSuccess, setFormSuccess] = useState({
    loading: false,
    success: null,
  });
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
      setFormSuccess({
        ...formSuccess,
        loading: true,
      });
      // console.log(values);
      emailjs
        .send(
          process.env.REACT_APP_email_service_id,
          process.env.REACT_APP_email_template_id,
          values,
          process.env.REACT_APP_email_user_id
        )
        .then(
          (result) => {
            console.log(result);
            if (result.status === 200) {
              setFormSuccess({
                success: true,
                loading: false,
              });

              setTimeout(() => {
                setFormSuccess({
                  ...formSuccess,
                  success: null,
                });
              }, 5000);
            } else {
              setFormSuccess({
                success: false,
                loading: false,
              });

              setTimeout(() => {
                setFormSuccess({
                  ...formSuccess,
                  success: null,
                });
              }, 20000);
            }
            // console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            setFormSuccess({
              success: false,
              loading: false,
            });

            setTimeout(() => {
              setFormSuccess({
                ...formSuccess,
                success: null,
              });
            }, 20000);
          }
        )
        .finally(() => {
          formik.resetForm();
        });
      // alert(JSON.stringify(values, null, 2));
    },
  });
  console.log("rendered contact");
  return (
    <section
      className={`contact mt-12 ${contactInview ? "inview" : ""}`}
      id="contact"
      ref={contactRef}
    >
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
                  <a
                    href="https://twitter.com/KaungKZ2000"
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  <a
                    href="https://github.com/KaungKZ"
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    /KaungKZ
                  </a>
                </div>
              </div>
              <div className="row flex items-end mb-14 last:mb-0">
                <div className="link-icon mr-5">
                  <img src={linkedin} alt="linkedin" className="" />
                </div>
                <div className="detail flex flex-col">
                  <h3 className="">See my career</h3>
                  <a
                    href="https://www.linkedin.com/in/kaung-khant-zaw-72549718a/"
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    /KaungKZ
                  </a>
                </div>
              </div>
              <div className="row flex items-end mb-14 last:mb-0">
                <div className="link-icon mr-5">
                  <img src={whatsapp} alt="whatsapp" className="" />
                </div>
                <div className="detail flex flex-col">
                  <h3 className="">Chat with me</h3>
                  <a
                    href="https://wa.me/qr/NND4XTTTJ5AHD1"
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
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
                    <div className="text-primary-default font-sm mb-2 error-input-field">
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
                      disabled={formik.isSubmitting}
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
                        strokeWidth="2"
                      />
                      <path
                        d="M22.6666 18.6667H23.1359C24.1107 18.667 25.0518 19.0232 25.7825 19.6685C26.5131 20.3137 26.983 21.2035 27.1039 22.1707L27.6253 26.3361C27.6721 26.7113 27.6387 27.0922 27.5271 27.4536C27.4155 27.8149 27.2284 28.1483 26.9781 28.4318C26.7278 28.7153 26.4201 28.9423 26.0753 29.0977C25.7306 29.2532 25.3567 29.3335 24.9786 29.3334H7.02125C6.64309 29.3335 6.26924 29.2532 5.92451 29.0977C5.57978 28.9423 5.27205 28.7153 5.02175 28.4318C4.77145 28.1483 4.5843 27.8149 4.47272 27.4536C4.36115 27.0922 4.32769 26.7113 4.37458 26.3361L4.89458 22.1707C5.01551 21.203 5.48581 20.3129 6.21703 19.6676C6.94825 19.0223 7.89002 18.6664 8.86525 18.6667H9.33325"
                        stroke="#58D9A5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="email input-field">
                  {formik.errors.email === "Required" ? (
                    <div className="text-primary-default font-sm mb-2 error-input-field">
                      This field cannot be empty
                    </div>
                  ) : formik.errors.email === "Invalid email address" ? (
                    <div className="text-primary-default font-sm mb-2 error-input-field">
                      Please enter valid email address
                    </div>
                  ) : null}
                  <div className="wrapper relative">
                    <input
                      id="email"
                      placeholder="Enter your email"
                      name="email"
                      disabled={formik.isSubmitting}
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
                    <div className="text-primary-default font-sm mb-2 error-input-field">
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
                      disabled={formik.isSubmitting}
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
                  className="border-0 px-20 py-2 text-xl text-text-white contact__submit font-semibold h-[44px]"
                  disabled={formik.isSubmitting}
                >
                  {formSuccess.loading ? (
                    <div class="dot-typing"></div>
                  ) : (
                    <>Send</>
                  )}
                  {/* Send */}
                </button>
                {formSuccess.success === true ? (
                  <div className="text-text-white flex items-center mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="#4bb188"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    Your message has been sent successfully !
                  </div>
                ) : formSuccess.success === false ? (
                  <div className="text-text-white flex items-center mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFB818"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      There was an error while sending the message, please try
                      again or send me an email{" "}
                      <a
                        href="mailto:kaungkzdev@gmail.com"
                        className="text-primary-default underline"
                      >
                        here
                      </a>
                    </span>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
        <img src={contactBg} alt="" className="absolute contact__bg" />
      </div>
    </section>
  );
}
