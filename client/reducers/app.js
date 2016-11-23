import {ADD_DATA, DELETE_DATA, EDIT_DATA, SEARCH_DATA} from '../constants/ActionTypes'

const initialState = [
  {
    id: 1,
    name: "Ken",
    phone: "081231238912"
  }
]

export default function data(state = initialState, action){// action connect ntr ke actions/index.js
  switch(action.type){
    case ADD_DATA:
    return [
      {
        id: Date.now(),
        name: action.name,
        phone: action.phone
      },
      ...state//ini mirip concat, syntax es6, bisa array, object
    ]
    case DELETE_DATA:
    return state.filter(data => data.id !== action.id)

    case EDIT_DATA:
    return state.map(data => data.id === action.id ? Object.assign({}, data, {name: action.name, phone: action.phone}) : data)

    default:
    return state
  }
}
