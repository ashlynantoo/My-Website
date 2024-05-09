import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "./Heading";
import { SkillsCategory, ProjectList } from "../components";

const Portfolio = () => {
  const { projects } = useLoaderData();
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjectsBySkillCategory = (selectedSkill) => {
    if (selectedSkill === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => {
          return (
            project.skills.find((skill) => {
              return skill === selectedSkill;
            }) && project
          );
        })
      );
    }
  };

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <Heading heading1="projects" />
        <SkillsCategory
          filterProjectsBySkillCategory={filterProjectsBySkillCategory}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    </section>
  );
};

export default Portfolio;
