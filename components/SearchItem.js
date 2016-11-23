import React, {Component, PropTypes} from 'react'

export default class SearchItem extends Component{
  constructor(props) {
    super(props)
    this.state = {
      searching: false,
      name: this.state.name || '',
      phone: this.state.phone || ''
    }
  }

  handleSeachYeah(e) {
    this.setState({searching: true})
  }


  handleSearch(e) {
    e.preventDefault()
    let name = "juang"
    let phone = ""
    if(!name || !phone) {
      return
    }
    this.props.searchData(name, phone)
    this.setState({searching: false})
  }

  render() {
    const {data, searchData} = this.props
    return (
      <form onSubmit={this.handleSearch.bind(this)}>
        <input className="form-control" type="search" placeholder="search" onChange={this.handleSeachYeah.bind(this)}/>
        <button className="btn btn-md btn-warning" type='sumbit'>Search</button>
      </form>
    )
  }

}

SearchItem.propTypes = {
  searchData: PropTypes.func.isRequired
}
