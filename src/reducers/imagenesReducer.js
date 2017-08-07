import * as types from '../actions/types'
import initialState from './initialState'

export default function imagenesReducer (state = initialState.imagenes, action) {
  switch (action.type) {
    case types.IMAGENES_SUCCESS:
      return action.imagenes
    default:
      return state
  }
}
