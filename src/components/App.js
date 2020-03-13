import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Principal from '../pages/principal';
import New from '../pages/new';
import Mapa from '../pages/mapa';
import Mobile from '../pages/phone';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Principal}/>
            <Route exact path="/new" component={New}/>
            <Route exact path="/mapa" component={Mapa}/>
            <Route exact path="/mobile" component={Mobile}/>
        </BrowserRouter>
    )
}

export default App