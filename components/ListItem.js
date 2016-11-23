import React, {Component, PropTypes} from 'react'

class ListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {data, actions} = this.props
        let dataNodes = data.map(function (item) {
            // return()
        })
        return(
            <ul>{dataNodes}</ul>
        )
    }
}

ListItem.propTypes = {
    data: propTypes.array.isRequired,
    actions: propTypes.object.isRequired
}