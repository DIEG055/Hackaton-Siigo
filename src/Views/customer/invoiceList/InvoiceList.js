import React from "react";
import "antd/dist/antd.css";
import Layout from "../../../Components/common/Common";
import InvoiceItems from "../../../Components/list/InvoiceItems";
import Details from "../../../Components/tenantDetails/tenantDetails";
const InvoiceList = () => {
  
  return (
    <Layout>
      <div style={{ background: '#fff', padding: 24, margin: '25px 50px' }}>
        {/* <Details/> */}
      </div>
      
      <div style={{ background: '#fff', padding: 24,margin: '25px 50px', minHeight: 280 }}>
        <InvoiceItems/>
      </div>
    </Layout>
  )    
};

export default InvoiceList;
