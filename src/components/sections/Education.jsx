import React from 'react'

const Education = () => {
  return (
    <section
      id='education'
      className='education'
    >

      <div className='education-container'>

        <h2 className='section-title'>
          Educación
        </h2>

        <div className='education-grid'>

          <div className='education-card'>

            <span className='education-year'>
              2022 - Presente
            </span>

            <h3>
              Analista Programador
            </h3>

            <h4>
              Universidad ORT Uruguay
            </h4>

            <p>
              Formación enfocada en desarrollo de software,
              arquitectura de aplicaciones, bases de datos,
              programación orientada a objetos y desarrollo web.
            </p>

          </div>

          <div className='education-card'>

            <span className='education-year'>
              Finalizado
            </span>

            <h3>
              Programador Web
            </h3>

            <h4>
              Universidad ORT Uruguay
            </h4>

            <p>
              Desarrollo de aplicaciones web utilizando
              tecnologías frontend y backend,
              APIs REST y bases de datos SQL.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Education