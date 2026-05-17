const ProjectCard = ({project, classname}) =>{
    return (
        <div className={classname}>

            <div className="project-content">
                <h3>
                    {project.title}
                </h3>

                <p>
                    {project.description}
                </p>

                <div>
                    {project.technologies.map((tech) => (
                        <span key={tech}>
                            {tech}
                        </span>
                    ))}
                </div>

                <a 
                    href={project.github}
                    target="_blank"
                    className="project-link"
                >
                    Ver Repositorio 
                </a>
            </div>
        </div>
    )
    
}

export default ProjectCard