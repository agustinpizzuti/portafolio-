import React from 'react'

const Hero = () => {
  return (
    <section>
        <div>
            <p>
                Full Stack Developer
            </p>

            <h1>
                Agustin 
                <br />
                Pizzuti
            </h1>

            <p>
                Desarrollo aplicaciones web modernas utilizando
                .NET, React y SQL Server con foco en arquitectura limpia
                y APIs REST.
            </p>

            <div>
                <a 
                    href='#projects'
                >
                    Ver Proyectos
                </a>

                <a
                    href='/CV_AgustinPizzuti.pdf'
                    download
                >
                    Descargar CV
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero