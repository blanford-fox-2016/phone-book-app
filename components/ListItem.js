import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

class ListItem extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		const {data, actions} = this.props
		let dataNodes = data.map(function(item){
			return(
				<DataItem key={item.id} data={item} {...actions}/>
				//actions sama dengan deleteData={actions.deleteData} editData={actions.editData}
			)
		})
		return(
			<div>{dataNodes}</div>
		)
	}
}

ListItem.propTypes = {
	data: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

export default ListItem