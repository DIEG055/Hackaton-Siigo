import React from "react";
import "antd/dist/antd.css";
import Layout from "../../../Components/common/Common";
import Myproducts from "../../../Components/list/Myproducts";
import Details from "../../../Components/tenantDetails/tenantDetails";
const MyProductList = () => {
  
  return (
    <Layout>
    <div style={{ background: '#fff', padding: 24,margin: '25px 50px', minHeight: 280 }}>
        
      </div>
      <div style={{ background: '#fff', padding: 24,margin: '25px 50px', minHeight: 280 }}>
        <Myproducts/>
      </div>
    </Layout>
  )    
};

export default MyProductList;
