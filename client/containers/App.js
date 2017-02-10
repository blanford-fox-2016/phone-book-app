import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../actions/index'
import ListItem from '../components/ListItem'
import AppTextInput from '../components/AppTextInput'

class App extends Component{

  render(){
    const { data, actions } = this.props
    return(
      <div>
        <h1>Tutorial react redux nih bro</h1>
        <div className="row">
          <AppTextInput onSave={actions.addData}/>
        </div>
        <ListItem data={ data } actions={ actions } />
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
  return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
