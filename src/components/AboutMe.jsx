import { FaDownload } from "react-icons/fa";
import Heading from "./Heading";
import Wrapper from "../assets/wrappers/AboutMe";
import profileImg from "../assets/images/profile.png";
import cv from "../assets/Ashlyn-CV.pdf";

const AboutMe = () => {
  return (
    <Wrapper>
      <div className="section">
        <div className="container">
          <Heading heading1="about" heading2="me" />
          <div className="about-container">
            <img
              src={profileImg}
              alt="Ashlyn's Profile Picture"
              className="profile-img"
            />
            <div className="about-desc">
              <p>
                <i>
                  Hey, I am Ashlyn! I am from Denton, Texas. I am a full-stack
                  web developer and a postgraduate in Computer Science &
                  Engineering. I love coding be it front-end or back-end. My
                  motivation is my happiness after designing web pages and
                  implementing logic. I am dedicated, hardworking, and a
                  perfectionist who will spend more time to get the desired
                  result. My mission is to develop affordable, efficient, and
                  user-friendly websites that precisely the customer wants.
                </i>
              </p>
              <p>
                <i>
                  After my bachelor's degree, I worked in a software company
                  called TCS for 1.4 years developing applications in Java. I
                  also did software testing. There, I was recognized as TCS GEM
                  for the outstanding contribution to the organization. When I
                  got the scholarship for higher studies, I did my master's
                  degree in computer science and engineering. After coming to
                  the US, while waiting for the employment authorization, I
                  learned web development, developed websites, and updated my
                  knowledge by taking courses and certifications. With the
                  knowledge and experience I gained, I assure you that I will
                  try my best to develop affordable, efficient, and
                  user-friendly websites that help customers to build their
                  businesses. Let's work together to make it a success...
                </i>
              </p>
              <div className="btn-container">
                <button className="btn">
                  <FaDownload />{" "}
                  <a href={cv} target="_blank">
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutMe;
