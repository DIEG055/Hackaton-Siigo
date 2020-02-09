import React from 'react'

import { Switch, Route } from 'react-router';

import HomeTenant from '../Views/tenant/home/Home'
import MyProductList from '../Views/tenant/productList/productList'
import ProductDetails from '../Views/tenant/productDetails/productDetails'
import NewProduct from '../Views/tenant/newProduct/NewProduct'
// import InvoiceList from './Views/tenant/invoiceList/InvoiceList'
import InvoiceList from '../Views/customer/invoiceList/InvoiceList'

function TentantRoutes(){
    return(
        <Switch>
            <Route exact path="/home" component={HomeTenant}></Route>
            <Route exact path="/products" component={MyProductList}></Route>
            <Route exact path="/product/:id" component={ProductDetails}></Route>
            <Route exact path="/invoices" component={InvoiceList}></Route>
            <Route exact path="/product/new" component={NewProduct}></Route>
            <Route component={HomeTenant} />
        </Switch>
    )
}

export default TentantRoutes;