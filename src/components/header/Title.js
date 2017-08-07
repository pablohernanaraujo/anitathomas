import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Title = ({titulo, location}) => {
  return (
    <div className='contenedor-header-titulo'>
      <Link to='/' className='boton-header'>
        {location === '/' ? <div className='header-titulo'>{titulo}</div> : <div className='header-titulo-negro'>{titulo}</div>}
      </Link>
    </div>
  )
}

Title.proptypes = {
  titulo: PropTypes.string.isRequired
}

export default Title
