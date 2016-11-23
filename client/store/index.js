import {createStore} from 'redux'
import rootReducer from '../reducers'//import reducers/index.js


export default function configureStore(initialState){
  const store = createStore(rootReducer, initialState)

  if(module.hot){//menjaga data
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
