import React from 'react'
import { Route } from 'react-router-dom'
import Items from './Items'

const Categories = (props) => {
    return <div>
        Menu Categories
        <Route path='/categories/items/:itemId' component={Items} />
    </div>
}

export default Categories
