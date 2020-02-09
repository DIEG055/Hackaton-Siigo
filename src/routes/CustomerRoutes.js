import React  from 'react'
import { useDispatch, } from 'react-redux';
import { Switch, Route } from 'react-router';
import { addItemCart, deleteItemCart } from '../redux/actions/cart';

import Home from '../Views/customer/home/Home'
import Cart from '../Views/customer/cart/cart'
import ProductList from '../Views/customer/productList/ProductList'
import InvoiceList from '../Views/customer/invoiceList/InvoiceList'

function CustomerRoutes() {

    const dispatch = useDispatch();

    return (
        <Switch>
            <Route exact path="/" > <Home/> </Route>
            <Route exact path="/tenant/:id" component={ProductList}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/invoices" component={InvoiceList}/>
            <Route exact path="/invoices/:id"></Route>
        </Switch>
    )
}

export default CustomerRoutes;