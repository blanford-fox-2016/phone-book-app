import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data, actions} = this.props
    let dataNodes = data.map(function(item) {
      return (
        <DataItem key={item.id} data={item} {...actions}/> //{...actions} equal to deleteData={actions.deleteData} editData={actions.editData}
      )
    })
    return (
      <ul className="list-group">{dataNodes}</ul>
    )
  }
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
