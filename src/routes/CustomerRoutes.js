import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/user';
import { Switch, Route } from 'react-router';
import { addItemCart, deleteItemCart } from '../redux/actions/cart';

function CustomerRoutes() {

    const dispatch = useDispatch();

    //Math.floor(Math.random()*10)

    return (
        <Switch>
            <Route exact path="/" >
                <button onClick={() => { dispatch(addItemCart(2, 3)) }}>add</button>
                <button onClick={() => { dispatch(deleteItemCart(2)) }}>delete</button>
            </Route>
            <Route exact path="/products" > </Route>
            <Route exact path="/cart"> </Route>
            <Route exact path="/invoices"></Route>
            <Route exact path="/invoices/:id"></Route>
        </Switch>
    )
}

export default CustomerRoutes;