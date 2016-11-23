import React, { Component, PropTypes } from 'react'

export default class AppSearchInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchName: '',
      searchPhone: ''
    }
  }

  handleSearchName(e){
    this.setState({
      searchName: e.target.value
    })
    if(e.target.value.length > 0){
      this.props.onSearchName(true, e.target.value)
    }else{
      this.props.onSearchName(false, "")
    }
  }

  handleSearchPhone(e){
    this.setState({
      searchPhone: e.target.value
    })
    if(e.target.value.length > 0){
      this.props.onSearchPhone(true, e.target.value)
    }else{
      this.props.onSearchPhone(false, "")
    }
  }

  render(){
    return(
      <div>
        <h4>Search</h4>
        <form className="form-group">
          <div className="col-sm-3">
            <input type="text" placeholder="search name" value={this.state.searchName} onChange={this.handleSearchName.bind(this)} className="form-control" />
          </div>
          <div className="col-sm-3">
            <input type="text" placeholder="search phone" value={this.state.searchPhone} onChange={this.handleSearchPhone.bind(this)} className="form-control" />
          </div>
        </form>
        <br />
        <br />
      </div>
    )
  }
}
