import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../action'

class App extends Component {
    render() {
        //data = this.props.data
        //actions = this.props.actions
        const {data, actions} = this.props
        return(
            <div>
                <h1>React Hacktiv8</h1>

            </div>
        )
    }
}

