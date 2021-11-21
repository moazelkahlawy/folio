import React from 'react'
import "./projects.css"
import {ProjectData} from "../../../data/projects"
import ProjectCard from "./ProjectCard"
import Sep from "../../common/sep/Sep"
function Projects() {
    const data = ProjectData
    return (
        <div className="projects">
            <Sep />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) => {
                    return <ProjectCard project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects
