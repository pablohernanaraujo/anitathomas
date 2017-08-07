import React from 'react'
import PropTypes from 'prop-types'
import { MediaBox } from 'react-materialize'

const Imagen = (imagen) => {
  return (
    <div
      className='contenedor-imagen'
    >
      <MediaBox className='imagen' src={imagen.imagen} />
    </div>
  )
}

Imagen.propTypes = {
  imagen: PropTypes.string
}

export default Imagen
