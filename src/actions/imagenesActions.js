import * as types from './types'
import { firebaseDb } from '../firebase'

const Imagenes = firebaseDb.ref('imagenes')

export function imagenes (imagenes) {
  return {
    type: types.IMAGENES_SUCCESS,
    imagenes
  }
}

export function cargarImagenes () {
  return dispatch => {
    Imagenes.on('value', snap => {
      let todasImagenes = snap.val()
      dispatch(imagenes(todasImagenes))
    })
  }
}
