import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'
import AppSearchInput from './AppSearchInput'

export default class ListItem extends Component{
  constructor(props){
    super(props)

    this.state = {
      isSearch: false,
      nameSearch: '',
      phoneSearch: ''
    }
  }

  handleSearchName(status, nameSearch){
    this.setState({
      isSearch: status,
      nameSearch: nameSearch
    })
  }

  handleSearchPhone(status, phoneSearch){
    this.setState({
      isSearch: status,
      phoneSearch: phoneSearch
    })
  }

  render(){
    const { data, actions } = this.props
    let data_temp = data
    console.log(this.state);
    if(this.state.isSearch){
      let data_temp = data.filter((item) => {
        if(this.state.nameSearch != "" && this.state.phoneSearch != ""){
          return (
            item.name.toLowerCase().startsWith(this.state.nameSearch.toLowerCase())
            &&
            item.phone.startsWith(this.state.phoneSearch)
          )
        }else if(this.state.nameSearch != ""){
          return item.name.toLowerCase().startsWith(this.state.nameSearch.toLowerCase())
        }else{
          return item.phone.startsWith(this.state.phoneSearch)
        }
      })

      let dataNodes = data_temp.map((item) => {
        return(
          <DataItem key={ item.id } data={ item } {...actions} />
        )
      })

      return(
        <div>
          <div className="row">
            <AppSearchInput data={ data } onSearchName={this.handleSearchName.bind(this)} onSearchPhone={this.handleSearchPhone.bind(this)} />
          </div>
          <div className="row">
            { dataNodes }
          </div>
        </div>
      )
    }else{
      let dataNodes = data.map((item) => {
        // console.log(item);
        return(
          <DataItem key={ item.id } data={ item } {...actions} />
        )
      })
      console.log(dataNodes);
      return(
        <div>
          <div className="row">
            <AppSearchInput data={ data } onSearchName={this.handleSearchName.bind(this)} onSearchPhone={this.handleSearchPhone.bind(this)} />
          </div>
          <div className="row">
            { dataNodes }
          </div>
        </div>
      )
    }

  }
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
