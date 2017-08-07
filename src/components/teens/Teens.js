import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import Imagen from '../Imagen'

class Teens extends React.Component {
  constructor () {
    super()
    this.renderImagenes = this.renderImagenes.bind(this)
  }

  renderImagenes (imagenes) {
    return _.map(imagenes, (imagen, index) => {
      return (
        <Imagen
          key={index}
          imagen={imagen.url}
        />
      )
    })
  }

  render () {
    return (
      <div id='columnas'>
        {this.renderImagenes(this.props.imagenes)}
      </div>
    )
  }
}

Teens.propTypes = {
  imagenes: PropTypes.array
}

function mapStateToProps (state, ownProps) {
  return {
    imagenes: state.imagenes.teens
  }
}

export default connect(mapStateToProps)(Teens)
