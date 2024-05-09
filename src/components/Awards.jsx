import { FaAngleDoubleRight } from "react-icons/fa";
import { honors } from "../utils/data";
import Heading from "./Heading";

const Awards = () => {
  return (
    <section className="section">
      <div className="container">
        <Heading heading1="Awards &" heading2="Honors" />
        <div className="sub-section">
          <article className="sub-section-container">
            {honors.map((award) => {
              const { id, desc } = award;
              return (
                <div key={id} className="desc">
                  <FaAngleDoubleRight className="bullet-point" />
                  <p>{desc}</p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Awards;
