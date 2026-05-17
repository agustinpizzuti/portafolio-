import React from 'react'

import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id='skills'>
        <div>

            <h2>
                Tecnologías
            </h2>

            <div>
                {skills.map((skill) => {
                    
                    const Icon = skill.icon
                    
                    return (
                        <div
                            key={skill.name}
                        >
                            <Icon />

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