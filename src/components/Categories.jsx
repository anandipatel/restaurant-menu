import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import Items from './Items'

class Categories extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            categories: []
        }
    }
    componentDidMount() {
        axios.get('https://davids-restaurant.herokuapp.com/categories.json').then(res => {
            this.setState({ categories: res.data, loading: false })
        })
    }
    render() {
        return <div style={{display: 'flex'}}>
            Menu Categories
            <br />
            {this.state.loading ? 'Loading...' :
                <ul>
                    {this.state.categories.map(cat => {
                        return <li><Link to={`${this.props.match.path}/items/${cat.short_name}`}>{`${cat.name} (${cat.short_name})`}</Link></li>
                    })}
                </ul>
            }
            <Route path={'/categories/items/:itemid'} component={Items} />
        </div>
    }
}

export default Categories
