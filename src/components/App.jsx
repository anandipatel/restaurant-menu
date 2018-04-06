import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
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
            <Switch>
                <Route path={'/'} exact={'true'} render={(props) => (
                    <Home {...props} />
                )} />
                <Route path={'/categories'} exact={true} render={(props) => (
                    <Categories {...props} />
                )} />
            </Switch>
        </div>
        )
    }
}

export default App