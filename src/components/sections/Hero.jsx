import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-content'>
            
            <p className='hero-subtitle'>
                Full Stack Developer
            </p>

            <h1 className='hero-title'>
                Agustin 
                <br />
                Pizzuti
            </h1>

            <p className='hero-description'>
                Desarrollo aplicaciones web modernas utilizando
                .NET, React y SQL Server con foco en arquitectura limpia
                y APIs REST.
            </p>

            <div className='hero-buttons'>
                <a 
                    href='#projects'
                    className='primary-btn'
                >
                    Ver Proyectos
                </a>

                <a
                    href='/CV_AgustinPizzuti.pdf'
                    download
                    className='secondary-btn'
                >
                    Descargar CV
                </a>
                
            </div>
        </div>

        <div className='terminal-container'>

            <div className='terminal'>

                <div className='terminal-header'>

                    <span className='circle red'></span>
                    <span className='circle yellow'></span>
                    <span className='circle green'></span>

                </div>

                    <div className='terminal-body'>

                        <p>
                        agustin@portfolio:~$ npm run dev
                        </p>

                        <p className='success'>
                        ✓ React initialized
                        </p>

                        <p className='success'>
                        ✓ .NET backend connected
                        </p>

                        <p className='success'>
                        ✓ SQL Server ready
                        </p>

                    </div>
            </div>
        </div>
    </section>
  )
}

export default Hero