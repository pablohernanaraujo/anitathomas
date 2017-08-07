import React from 'react'
import { Link } from 'react-router'

export default class HomePage extends React.Component {
  render () {
    return (
      <div className='contenedor-home'>
        <div className='contenedor-fashion'>
          <Link className='boton-fashion' to='/fashion'>FASHION</Link>
          <div className='mascara-home' />
        </div>
        <div className='contenedor-teens'>
          <Link className='boton-teens' to='/teens'>TEENS</Link>
          <div className='mascara-home' />
        </div>
      </div>
    )
  }
}
