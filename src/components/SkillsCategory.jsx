import { useState, useRef, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import Wrapper from "../assets/wrappers/SkillsCategory";

const SkillsCategory = ({ filterProjectsBySkillCategory }) => {
  const [showSkillsCategory, setShowSkillsCategory] = useState(false);
  const skillsContainerRef = useRef(null);
  const skillsRef = useRef(null);
  const { skills } = useLoaderData();

  useEffect(() => {
    const skillsHeight = skillsRef.current.getBoundingClientRect().height + 20;
    showSkillsCategory
      ? (skillsContainerRef.current.style.height = `${skillsHeight}px`)
      : (skillsContainerRef.current.style.height = `0px`);
  }, [showSkillsCategory]);

  return (
    <Wrapper>
      <div className="skills-category-container">
        <button
          className="btn btn-block btn-filter"
          onClick={() => {
            setShowSkillsCategory(!showSkillsCategory);
          }}
        >
          Filter Projects
          <span className="dropdown-icon">
            <RiArrowDropDownLine />
          </span>
        </button>
        <div ref={skillsContainerRef} className="skills-container">
          <ul ref={skillsRef} className="skills">
            {skills.map((skill, index) => {
              return (
                <li key={index}>
                  <button
                    className="btn btn-block btn-skills"
                    onClick={() => {
                      setShowSkillsCategory(!showSkillsCategory);
                      filterProjectsBySkillCategory(skill);
                    }}
                  >
                    {skill}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default SkillsCategory;
