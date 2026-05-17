import React from 'react'

import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section id='projects' className='projects'>
        <div className='projects-container'>
            <h2 className='section-title'>
                Proyectos
            </h2>
        </div>

        <div className='projects-grid'>
            {projects.map((project) =>(
                <ProjectCard 
                    key={project.title}
                    project={project}
                    className="project-card"
                />
            ))}
        </div>
    </section>
  )
}

export default Projects