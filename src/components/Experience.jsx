import { FaAngleDoubleRight } from "react-icons/fa";
import Heading from "./Heading";
import { jobs } from "../utils/data";

const Experience = () => {
  return (
    <section className="section">
      <div className="container">
        <Heading heading1="work" heading2="experience" />
        <div className="sub-section">
          {jobs.map((job) => {
            const { id, title, company, period, duties } = job;
            return (
              <article key={id} className="sub-section-container">
                <h4>{title}</h4>
                <h5>{company}</h5>
                <p className="date-format">{period}</p>
                {duties.map((duty, index) => {
                  return (
                    <div key={index} className="desc">
                      <FaAngleDoubleRight className="bullet-point" />
                      <p>{duty}</p>
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

export default Experience;
