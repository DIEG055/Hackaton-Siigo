import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Views/customer/home/Home'
import Cart from './Views/customer/cart/cart'
import ProductList from './Views/customer/productList/ProductList'
import InvoiceList from './Views/customer/invoiceList/InvoiceList'

ReactDOM.render(<InvoiceList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

