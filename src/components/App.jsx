import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Categories from './Categories'
import Items from './Items'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path={'/'} render={(props) => (
                    <Home {...props} />
                )} />
                <Route path={'/categories'} exact={true} render={(props) => (
                    <Categories {...props} />
                )} />
                <Route path={'/categories/items/:itemId'} render={(props) => (
                    <Items {...props} />
                )} />
            </Switch>
        )
    }
}

export default App