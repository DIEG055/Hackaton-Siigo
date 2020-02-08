import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/user';
import { Switch, Route } from 'react-router';

function TentantRoutes(){
    return(
        <Switch>
            <Route exact path="/" ></Route>
            <Route exact path="/product"></Route>
            <Route exact path="/product/:id"></Route>
            <Route exact path="/product/new"></Route>
        </Switch>
    )
}

export default TentantRoutes;