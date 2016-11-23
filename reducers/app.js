import {ADD_DATA, DELETE_DATA, EDIT_DATA, SEARCH_DATA} from '../constants/ActionTypes'

const initialState = [
    {
        id: 1,
        name: 'Rubi',
        phone: '08112237786'
    }
]

export default function data(state = initialState, action) {
    switch(action.type) {
        case ADD_DATA:
            return [
                {
                    id: Date.now(),
                    name: action.name,
                    phone: action.phone
                },
                ...state
            ]

        case DELETE_DATA:
            return state.filter(data => data.id !== action.id)

        case EDIT_DATA:
            return state.map(data => data.id === action.id ? Object.assign({}, data, {name: action.name, phone: action.phone}) : data)

        case SEARCH_DATA:
            return state.filter((data) => {
                console.log(action.name)
                return data.name.startsWith(action.name)
            })
        default:
            return state
    }
}