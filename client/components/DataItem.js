import React, { Component, PropTypes } from 'react'

class DataItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
      name: this.props.data.name || '',
      phone: this.props.data.phone || ''
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

  handleEditClick(){
    this.setState({
      editing: true
    })
  }

  handleSaveEdit(e){
    e.preventDefault()
    var name = this.state.name.trim()
    var phone = this.state.phone.trim()

    if(!name || !phone){
      return
    }else{
      this.props.editData(this.props.data.id, name, phone)

      this.setState({
        editing: false
      })
    }
  }

  onCancel(e){
    e.preventDefault()
    this.setState({
      editing: false
    })
  }

  render(){
    const { data, deleteData, editData } = this.props
    if(this.state.editing){
      return(
        <form onSubmit={this.handleSaveEdit.bind(this)} className="form-group">
          <input type="text" placeholder="input name" value={this.state.name} onChange={this.handleChangeName.bind(this)} className="form-control" />

          <input type="text" placeholder="input phone" value={this.state.phone} onChange={this.handleChangePhone.bind(this)} className="form-control" />

          <button type="submit" className="btn btn-warning btn-xs">Save Data</button>

          <button type="submit" onClick={this.onCancel.bind(this)} className="btn btn-danger btn-xs">Cancel</button>
        </form>
      )
    }else{
      return(
        <div className="comment panel panel-default">
          <div className="panel-body">
            {data.name} - {data.phone}
          </div>
          <div className="panel-footer">
            <button type="button" onClick={this.handleEditClick.bind(this)} className="btn btn-warning btn-xs">Edit</button>

            <button type="button" onClick={() => confirm("Are you sure want to delete?") === true ? deleteData(data.id) : false } className="btn btn-danger btn-xs" >Delete</button>
          </div>
        </div>


      )
    }
  }
}

DataItem.propTypes = {
  data: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired
}

export default DataItem
