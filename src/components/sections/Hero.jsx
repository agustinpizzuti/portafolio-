import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-content'>
            
            <p className='hero-subtitle'>
                Full Stack Developer
            </p>

            <h1 className='hero-title'>
                Agustin Pizzuti
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
                    href="../../../docs/CV_AgustinPizzuti.pdf"
                    download
                    className='secondary-btn'
                >
                    Descargar CV
                </a>
                
            </div>
        </div>
    </section>
  )
}

export default Hero