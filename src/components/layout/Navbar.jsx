import React from 'react'

const Navbar = () => {
  return (
    <header className='navbar'>

        <div className='navbar-container'> 

            <h2 className='logo'>
                Agustin
            </h2>
       
            <nav className='nav-links'>
                <a href='#about'>
                    Sobre mi
                </a>
                
                <a href='#skills'>
                    Skills
                </a>
                
                <a href='#projects'>
                    Proyectos
                </a>
                
                <a href='#contact'>
                    Contacto
                </a>
            </nav>
        
        </div>
    </header>
  )
}

export default Navbar