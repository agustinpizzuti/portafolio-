import React from 'react'

import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section id='projects'>
        <div>
            <h2>
                Proyectos
            </h2>
        </div>

        <div>
            {projects.map((project) =>(
                <ProjectCard 
                    key={project.title}
                    project={project}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects