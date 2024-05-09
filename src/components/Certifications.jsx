import { FaAngleDoubleRight } from "react-icons/fa";
import { courses } from "../utils/data";
import Heading from "./Heading";

const Certifications = () => {
  return (
    <section className="section">
      <div className="container">
        <Heading heading1="Certifications &" heading2="Courses" />
        <div className="sub-section">
          {courses.map((course) => {
            const { id, title, year, desc } = course;
            return (
              <article key={id} className="sub-section-container">
                <h4>{title}</h4>
                <p className="date-format">{year}</p>
                {desc.map((detail, index) => {
                  return (
                    <div key={index} className="desc">
                      <FaAngleDoubleRight className="bullet-point" />
                      <p>{detail}</p>
                    </div>
                  );
                })}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
