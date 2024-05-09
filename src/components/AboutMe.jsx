import profileImg from "../assets/images/profile.png";
import { FaDownload } from "react-icons/fa";
import Heading from "./Heading";
import Wrapper from "../assets/wrappers/AboutMe";

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
                  Hey, I am Ashlyn! I am from Denton, Texas. I am a web
                  developer and a postgraduate in Computer Science &
                  Engineering. I love coding be it front end or back end. My
                  motivation is my happiness after designing web pages and
                  implementing logic. I am dedicated, hardworking, and a
                  perfectionist who will spend more time to get the desired
                  result. My mission is to develop affordable, efficient, and
                  user-friendly websites that precisely the customer wants.
                </i>
              </p>
              <p>
                <i>
                  After my bachelor&#39;s degree, I worked in a software company
                  developing applications in Java. I also did software testing.
                  When I got the scholarship for higher studies, I did my
                  master&#39;s degree in Computer Science and Engineering. After
                  coming to the US, while waiting for employment authorization,
                  I learned web development, developed websites, and updated my
                  knowledge. With the knowledge and experience I gained, I
                  assure you that I will try my best to develop affordable,
                  efficient, and user-friendly websites that help customers to
                  build their businesses. Let&#39;s work together to make it a
                  success...
                </i>
              </p>
              <div className="btn-container">
                <button className="btn">
                  <FaDownload /> Download CV
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
