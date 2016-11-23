import React, {Component, PropTypes} from 'react'

class DataItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {data} = this.props
        return (
            <li>{data.name} - {data.phone}</li>
        )
    }
}

DataItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default DataItem