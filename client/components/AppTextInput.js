import React, { Component, PropTypes } from 'react'

export default class AppTextInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name || '',
      phone: this.props.phone || ''
    }
  }

  handleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  handleChangePhone(e){
    this.setState({
      phone: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    let name = this.state.name.trim()
    let phone = this.state.phone.trim()

    if(!name || !phone){
      return
    }else{
      this.props.onSave(name, phone)

      this.setState({
        name: '',
        phone: ''
      })
    }
  }

  render(){
    return(
      <div>
        <h4>Add new data</h4>
        <form onSubmit={this.handleSubmit.bind(this)} className="form-group">
          <div className="col-sm-3">
            <input type="text" placeholder="input name" value={this.state.name} onChange={this.handleChangeName.bind(this)} className="form-control" />
          </div>
          <div className="col-sm-3">
            <input type="text" placeholder="input phone" value={this.state.phone} onChange={this.handleChangePhone.bind(this)} className="form-control" />
          </div>
          <button type="submit" className="btn btn-default btn-sm">add data</button>
        </form>
      </div>
    )
  }
}

AppTextInput.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  onSave: PropTypes.func.isRequired
}
