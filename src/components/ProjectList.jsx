import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Wrapper from "../assets/wrappers/ProjectList";

const ProjectList = ({ projects }) => {
  return (
    <Wrapper>
      <div className="projects">
        {projects.map((project) => {
          const {
            id,
            name,
            description,
            img,
            skills,
            websiteLink,
            githubLink,
          } = project;
          return (
            <div key={id} className="project-container">
              <div className="img-container">
                <img src={img} alt={name} className="portfolio-img" />
              </div>
              <h4>{name}</h4>
              <p className="description">{description}</p>
              <div className="skills">
                {skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>;
                })}
              </div>
              <div className="links">
                <a href={websiteLink}>
                  <TbWorldWww />
                </a>
                <a href={githubLink}>
                  <FaGithub />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProjectList;
