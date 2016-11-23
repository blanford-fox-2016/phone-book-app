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

App.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {data: state.data}
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

