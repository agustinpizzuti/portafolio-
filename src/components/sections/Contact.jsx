import React from 'react'

const Contact = () => {
  return (
    <section
      id='contact'
      className='contact'
    >

      <div className='contact-container'>

        <h2 className='section-title'>
          Contacto
        </h2>

        <p className='contact-description'>
          Estoy abierto a oportunidades laborales,
          proyectos y nuevas experiencias.
        </p>

        <div className='contact-links'>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aguspizzuti2020@gmail.com"
            target='_blank'
            rel='noreferrer'
            className='contact-link'
          >
            Email
          </a>

          <a
            href="https://github.com/agustinpizzuti"
            target='_blank'
            rel='noreferrer'
            className='contact-link'
          >
            GitHub
          </a>

          <a
            href='https://www.linkedin.com/in/agust%C3%ADn-pizzuti-pacheco/'
            target='_blank'
            rel='noreferrer'
            className='contact-link'
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact