import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

export default class ListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {data} = this.props
        let dataNodes = data.map(function (item) {
            return(
                <DataItem key={data.id} data={item} />
            )
        })
        return(
            <ul>{dataNodes}</ul>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.array.isRequired
}