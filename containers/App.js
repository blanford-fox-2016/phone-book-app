import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux' //hubungin react sm redux
import * as AppActions from '../actions' 

class App extends Component {
  render(){
    const {data, actions} = this.props
    return(
          <div className="jumbotron">
            <div className="text-center">
              <h1>Halo</h1>
            </div>
          </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {data: state.data}
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
