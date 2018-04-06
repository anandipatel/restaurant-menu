import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Categories from './Categories'

class App extends Component {
    render() {
        return (<div>
            <h3>Welcome to Chef Chu's Restaurant</h3>
            <Link to='/'><button>Home</button></Link>
            <Link to='/categories'><button>Categories</button></Link>
            <br />
            <br />
            <Route path={'/'} exact={'true'} component={Home} />
            <Route path={'/categories'} component={Categories} />
        </div>
        )
    }
}

export default App