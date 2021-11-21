import React from "react";
import "./work.css";
import { WorkData } from "../../../data/work";
import Sep from "../../common/sep/Sep";
import WorkCard from "./WorkCard";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Sep />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
