import React from 'react';
import { Route, Switch } from 'react-router';
import BeerList from './BeersList/BeerList';
import Home from './Home/Home'
import BeerDetails from './BeerDetails/BeerDetails'

function AppRouter() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={BeerList} />
            <Route exact path='/beers/:id' component={BeerDetails}/>
        </Switch>
    );
}

export default AppRouter;