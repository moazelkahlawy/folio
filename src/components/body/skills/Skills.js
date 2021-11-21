import React from "react";
import "./skills.css";
import Sep from "../../common/sep/Sep";
import { SkillsData } from "../../../data/skills";
import SkillsCard from "./SkillsCard";
function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Sep />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillsCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
