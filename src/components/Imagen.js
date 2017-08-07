import React from 'react'
import PropTypes from 'prop-types'

const Imagen = (imagen) => {
  return (
    <div className='contenedor-imagen'>
      <img className='imagen' src={imagen.imagen} />
    </div>
  )
}

Imagen.propTypes = {
  imagen: PropTypes.string
}

export default Imagen
