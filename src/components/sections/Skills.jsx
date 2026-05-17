import React from 'react'

import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id='skills' className='skills'>
        <div className='skills-container'>

            <h2 className='section-title'>
                Tecnologías
            </h2>

            <div className='skills-grid'>
                {skills.map((skill) => {
                    
                    const Icon = skill.icon
                    
                    return (
                        <div
                            key={skill.name}
                            className='skill-card'
                        >
                            <Icon className='skill-icon'/>

                            <p>
                                {skill.name}
                            </p>

                        </div>
                    )

                })}
            </div>
        </div>
    </section>
  )
}

export default Skills