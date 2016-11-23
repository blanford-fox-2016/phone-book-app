import {ADD_DATA, EDIT_DATA, DELETE_DATA, SEARCH_DATA} from '../constants/ActionTypes'

const initialState = [{
  id: 0,
  name: 'Rubi Henjaya',
  phone: '08112237786'
}]

export default function data(state = initialState, action){
  switch (action.type) {
    case ADD_DATA:
    return [{
      id: Date.now(),
      name: action.name,
      phone: action.phone
    },
    ...state
  ]
    case EDIT_DATA:
    return state.map(data => data.id === action.id ? Object.assign({}, data, {name: action.name, phone: action.phone}): data)

    case DELETE_DATA:
    return state.filter(data => data.id !== action.id)

    default:
    return state

  }
}
