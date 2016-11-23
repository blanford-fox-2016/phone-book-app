import {ADD_DATA, DELETE_DATA, EDIT_DATA} from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    name: 'Juang',
    phone: '085774369672'
  }
]

export default function data(state = initialState, action){
  switch(action.type){
    case ADD_DATA:
      return [
        {
          id: Date.now(),
          name: action.name,
          phone: action.phone
        },
        ...state // it can spread array and object
      ]
    case DELETE_DATA:
      return state.filter(data => data.id !== action.id)
    case EDIT_DATA:
      return state.map(data => data.id === action.id ? Object.assign({}, data, {name: action.name, phone: action.phone}) : data)
    default:
      return state
  }
}
