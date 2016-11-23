import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

class ListItem extends Component{
	constructor(props) {
		super(props);
		this.state= {
			searchedName: '',
			searchedPhone: ''
		}
	}
	getSearchedName(e){
		this.setState({
			searchedName: e.target.value
		})
	}
	getSearchedPhone(e){
		this.setState({
			searchedPhone: e.target.value
		})
	}
	render() {
		const {data, actions} = this.props
		let filteredData = data

		if(this.state.searchedName != '' && this.state.searchedPhone != ''){
			filteredData = data.filter((data) => {
				return data.name.toLowerCase().startsWith(this.state.searchedName.toLowerCase()) && data.phone.startsWith(this.state.searchedPhone)
			})
		}

		else if(this.state.searchedName != ''){
			filteredData = data.filter((data) => {
				return data.name.toLowerCase().startsWith(this.state.searchedName.toLowerCase())
			})
		}

		else if(this.state.searchedPhone != ''){
			filteredData = data.filter((data) => {
				return data.phone.startsWith(this.state.searchedPhone)
			})
		}

		let dataNodes = filteredData.map(function(item){
			return(
				<DataItem key={item.id} data={item} {...actions}/>
				//...actions sama dengan deleteData={actions.deleteData} editData={actions.editData}
			)
		})
		return(
			<div>
				<div className="row">
					<form>
						<div className="col-sm-6">
							<input className="form-control" type="text" placeholder="Search Name" value={this.state.searchedName} onChange={this.getSearchedName.bind(this)}/>
						</div>
						<div className="col-sm-6">
							<input className="form-control" type="text" placeholder="Search Phone No" value={this.state.searchedPhone} onChange={this.getSearchedPhone.bind(this)}/>
						</div>
					</form>
				</div>
				<br/>
				<div>{dataNodes}</div>
			</div>
		)
	}
}

ListItem.propTypes = {
	data: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

export default ListItem