import {ADD_DATA, EDIT_DATA, DELETE_DATA} from '../constants/ActionTypes'

const initialState = [{
  id: 0,
  name: 'Tivenstain Eimash',
  phone: '085656222288'
}]

export default function data(state = initialState, action){
  switch (action.type) {
    case ADD_DATA:
    return [{
      id: Date.now(),
      name: action.name,
      phone: action. phone
    },
    ...state
    ]

    case EDIT_DATA:
    return []

    case DELETE_DATA:
    return state.filter((data) => data.id !== action.id)

    default:
    return state

  }
}
