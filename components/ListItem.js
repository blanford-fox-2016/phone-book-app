import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'
import SearchData from './SearchData'

export default class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    getSearch(e) {
        // console.log(e.target.value)
        this.setState({
            search: e.target.value
        })

    }

    render() {

        const {data, actions} = this.props
        let dataFilter = data

        if (this.state.search != '') {
            dataFilter = data.filter((data) => {
                return data.name.startsWith(this.state.search)
            })
        }
        let dataNodes = dataFilter.map(function (item) {
            return(
                <DataItem key={item.id} data={item} {...actions} />
            //    deleteData={actions.deleteData} 3 kali
            )
        })
        return(
            <div>
                <input type="text" placeholder="Search Name" className="form-control" value={this.state.search} onChange={this.getSearch.bind(this)} />
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {dataNodes}
                    </tbody>
                </table>
            </div>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}