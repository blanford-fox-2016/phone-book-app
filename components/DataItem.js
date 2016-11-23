import React, {Component, PropTypes} from 'react'

class DataItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            name: this.props.data.name || '',
            phone: this.props.data.phone || ''
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handlePhoneChange(e) {
        this.setState({
            phone: e.target.value
        })
    }

    handleEditClick() {
        this.setState({
            editing: true
        })
    }

    handleSaveEdit(e) {
        e.preventDefault()
        let name = this.state.name.trim()
        let phone = this.state.phone.trim()
        if (!name || !phone) {
            return
        }
        this.props.editData(this.props.data.id, name, phone)
        this.setState({
            editing: false
        })
    }

    render() {
        const {data, deleteData, editData} = this.props
        if (this.state.editing) {
            return(
                <form onSubmit={this.handleSaveEdit.bind(this)}>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                    <input type="text" placeholder="Phone" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} />
                    <button type="submit">Save</button>
                </form>
            )
        }
        else {
            return (
                <li>{data.name} - {data.phone}
                    <button type="button" onClick={() => deleteData(data.id)}>Delete</button>
                    <button type="button" onClick={this.handleEditClick.bind(this)}>Edit</button>
                </li>
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