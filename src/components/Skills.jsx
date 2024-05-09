import Wrapper from "../assets/wrappers/Skills";
import { skillsAndTools } from "../utils/data";
import Heading from "./Heading";

const Skills = () => {
  return (
    <Wrapper id="skills">
      <div className="section">
        <div className="container">
          <Heading heading1="Skills &" heading2="Tools" />
          <div className="skills-tools-container">
            {skillsAndTools.map((skill) => {
              const { id, name, icon } = skill;
              return (
                <div key={id} className="skill-container">
                  <p className="skill-icon">{icon}</p>
                  <p className="skill-name">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
