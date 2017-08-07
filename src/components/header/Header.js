import React from 'react'

import Title from './Title'
import BotonNavegador from './BotonNavegador'

export default class Header extends React.Component {
  render () {
    let botones = (
      <div className='contenedor-navegador'>
        <BotonNavegador
          to={'/fashion'}
          pathname={this.props.pathname}
          name={'FASHION'}
        />
        <BotonNavegador
          to={'/teens'}
          pathname={this.props.pathname}
          name={'TEENS'}
        />
      </div>
    )
    return (
      <div>
        <header>
          <Title
            titulo={'ANITA THOMAS'}
            location={this.props.pathname}
          />
          <div className='contenedor-derecha'>
            {this.props.pathname === '/' ? null : botones}
            <div className='contenedor-social'>
              <a href='https://www.facebook.com/AnitaThomasPH/' className='boton-social' target='_blank'>
                {this.props.pathname === '/' ? <i className='fa fa-facebook icono-blanco' /> : <i className='fa fa-facebook icono-negro' />}
              </a>
              <a href='https://www.instagram.com/anitathomasph/?hl=es' className='boton-social' target='_blank'>
                {this.props.pathname === '/' ? <i className='fa fa-instagram icono-blanco' /> : <i className='fa fa-instagram icono-negro' />}
              </a>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
