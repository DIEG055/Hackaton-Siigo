import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Views/customer/home/Home'
import TenantList from './Views/customer/tenantList/TenantList'
import ProductList from './Views/customer/productList/ProductList'

ReactDOM.render(<ProductList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

