const ProjectCard = ({project}) =>{
    return (
        <div>
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
            >
                Ver Repositorio 
            </a>
        </div>
    )
    
}

export default ProjectCard