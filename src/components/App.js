import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Principal from '../pages/principal'
import New from '../pages/new'

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/principal" component={Principal}/>
            <Route exact path='/new' component={New}/>
        </BrowserRouter>
    )
}

export default App