import React from 'react'

const About = () => {
  return (
    <section id='about' className='about'>


        <div className='about-container'>
            <div className='about-text'>

                <h2 className='section-title'>
                    Sobre mi
                </h2>

                <p>
                    Soy estudiante avanzado de Analista Programador en ORT Uruguay,
                    enfocado en el desarrollo de aplicaciones web modernas utilizando
                    .NET, React y SQL Server.
                </p>

                <p>
                    Me interesa especialmente el desarrollo backend,
                    la arquitectura limpia, APIs REST y la construcción
                    de soluciones escalables.
                </p>
            </div>

            <div className='about-cards'>

                <div className='about-card'>
                    <h3>
                        Educación
                    </h3>

                    <p>
                        Analista Programador
                    </p>

                    <p>
                        Universidad ORT Uruguay
                    </p>
                </div>
                
                <div className='about-card'>
                    <h3>
                        Idiomas
                    </h3>

                    <p>
                        Español (nativo) - Ingles B2
                    </p>
                </div>
                
            </div>    
        </div>
    </section>

  )
}

export default About