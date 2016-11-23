import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

export default class ListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {data, actions} = this.props
        let dataNodes = data.map(function (item) {
            return(
                <DataItem key={item.id} data={item} {...actions} />
            //    deleteData={actions.deleteData} 3 kali
            )
        })
        return(
            <ul>{dataNodes}</ul>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}