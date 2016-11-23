import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'


export default class ListItem extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {data, actions} = this.props
    let dataNodes = data.map(item => (<DataItem key={item.id} data={item} {...actions} />) ) // it's the same as the all the data
    return (
      <div>{dataNodes}</div>
    )
  }
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
