import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Icon } from "antd";
import Layout from "../../../Components/common/Common";
import ProductItems from "../../../Components/list/ProductItems";
import ItemDetails from "../../../Components/itemDetails/itemDetails";
import Details from "../../../Components/tenantDetails/tenantDetails";
const ProductList = () => {
  return (
    <Layout>
        
      <div style={{ background: '#fff', padding: 24, margin: '25px 50px' }}>
        <Details/>
        <ItemDetails/>
      </div>
      
      <div style={{ background: '#fff', padding: 24,margin: '25px 50px', minHeight: 280 }}>
        <ProductItems/>
      </div>
    </Layout>
  )    
};

export default ProductList;
