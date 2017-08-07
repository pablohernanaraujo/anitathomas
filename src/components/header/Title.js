import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Title = ({titulo, location}) => {
  return (
    <div className='contenedor-header-titulo'>
      <Link to='/' className='boton-header'>
        {location === '/' ? <img src='./images/anita-thomas-white.png' /> : <img src='./images/anita-thomas-black.png' />}
      </Link>
    </div>
  )
}

Title.proptypes = {
  titulo: PropTypes.string.isRequired
}

export default Title
