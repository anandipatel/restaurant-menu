import React, { Component } from 'react'
import axios from 'axios'

class Items extends Component {
    constructor() {
        super()
        this.state = {
            itemDetails: []
        }
    }
    componentWillReceiveProps(nextProp) {
        axios.get(`https://davids-restaurant.herokuapp.com/menu_items.json?category=${nextProp.match.params.itemid}`).then(res => {
            this.setState({ itemDetails: res.data.menu_items })
        })
    }
    render() {
        return (<div><h4>Items in Category: ({this.props.match.params.itemid})</h4>
            {this.state.itemDetails.length > 0 &&
                <table style={{border: '1px solid gray'}}>
                    <thead>
                        <tr><th>Name</th><th>Description</th></tr>
                    </thead>
                    <tbody>
                        {this.state.itemDetails.map(item => {
                            return <tr><td>{item.name}</td><td>{item.description}</td></tr>
                        })}
                    </tbody>
                </table>
            }
        </div>)
    }
}

export default Items
