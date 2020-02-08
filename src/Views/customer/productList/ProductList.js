import React from "react";
import "antd/dist/antd.css";
import Layout from "../../../Components/common/Common";
import ProductItems from "../../../Components/list/ProductItems";
import Details from "../../../Components/tenantDetails/tenantDetails";
const ProductList = () => {
  
  return (
    <Layout>
        
      <div style={{ background: '#fff', padding: 24, margin: '25px 50px' }}>
        <Details/>
      </div>
      
      <div style={{ background: '#fff', padding: 24,margin: '25px 50px', minHeight: 280 }}>
        <ProductItems/>
      </div>
    </Layout>
  )    
};

export default ProductList;
