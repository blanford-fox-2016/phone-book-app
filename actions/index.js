import * as types from '../constants/ActionTypes'

export function addData(name, phone) {
  return {type: types.ADD_DATA, name, phone}
}

export function deleteData(id) {
  return {type: types.DELETE_DATA, id}
}

export function editData(id, name, phone) {
  return {type: types.EDIT_DATA, id, name, phone}
}

export function searchData(name, phone) {
  return {type: types.SEARCH_DATA, name, phone}
}
