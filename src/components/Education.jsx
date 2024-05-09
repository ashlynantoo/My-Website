import { degrees } from "../utils/data";
import Heading from "./Heading";

const Education = () => {
  return (
    <section className="section">
      <div className="container">
        <Heading heading1="Educational" heading2="Qualifications" />
        <div className="sub-section">
          {degrees.map((degree) => {
            const { id, title, spec, period } = degree;
            return (
              <article key={id} className="sub-section-container">
                <h4>{title}</h4>
                <h5>{spec}</h5>
                <p className="date-format">{period}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
