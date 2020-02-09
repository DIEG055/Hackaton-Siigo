import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Layout from "../../../Components/common/Common";
import ProductItems from "../../../Components/list/ProductItems";
import Details from "../../../Components/tenantDetails/tenantDetails";
const ProductList = (props) => {
  const id = props.match.params.id;
  const [tenant,setTenant] = useState({});
  const [tenantProducts,setTenantProducts] = useState([]);

  const temporalTenant ={
    name: "Siigo",
    location: "Bogota"   
  }
  const temporalProducts = [
    {name: 'Producto1'},
    {name: 'Producto2'},
    {name: 'Producto3'},
    {name: 'Producto4'},
  ]

  const getTenantData = () =>{
      setTenant(temporalTenant);
      setTenantProducts(temporalProducts)
  }

  useEffect(() => {
    getTenantData()
  },[])

  
  return (
    <Layout>
        
      <div style={{ background: '#fff', padding: 24, margin: '25px 50px' }}>
        <Details data={tenant}/>
      </div>
      
      <div style={{ background: '#fff', padding: 24,margin: '25px 50px', minHeight: 280 }}>
        <ProductItems data={temporalProducts}/>
      </div>
    </Layout>
  )    
};

export default ProductList;
