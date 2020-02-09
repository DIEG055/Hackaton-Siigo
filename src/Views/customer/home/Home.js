import React, {useState,useEffect} from "react";
import { Row, Col, Button, Layout} from "antd";
import LayoutDesign from "../../../Components/common/Common";
import SearchInput from "../../../Components/autoCompleteInput/autoCompleteInput";
import TenantItems from "../../../Components/list/TenantItems";
import "./index.css"

const { Content } = Layout;

const Home = () => {

  const [tenantNames, setTenantNames] =  useState([]);

  //lista de de las empresas que hacen cuyo nombre hace match con searchItem
  const [tenantItems, setTenantItems] = useState([]);

  const data = [
    {
      title: 'Siigo 1',
    },
    {
      title: 'Siigo 2',
    },
    {
      title: 'Siigo 3',
    },
    {
      title: 'Siigo 4',
    },
  ];

  useEffect(() => {
    //NOTIFICAR CON OBSERVABLES CUANDO NUEVOS PRODUCTOS LLEGEN !!!!!!
    const names = ['siigo','microsoft','apple','google','amazon','Tesla','SpaceX']
    setTenantNames(names)
  }
  ,[])


  const getData = (name) => {
    //Logica de Busqueda
    // Tener en cuenta que se debe hacer una peticion cada vez que el usuario ingrese una letra y tomando en cuenta las preferencias(las veces  que busco antes a las empreas)
    setTenantItems(data);
  }
  
  return (
    <LayoutDesign>
      
      <div style={{ background: '#fff', padding: 25, minHeight: 100 ,margin: '25px 50px' }}>
      <Row>
        <Col style={{ width: '100%' }}>
            <h1 style ={{ textAlign: "center", marginBottom: 25}}>Busca una Empresa</h1>
          <SearchInput 
            data= {tenantNames}
          />
          <div className='center-SearchButton' >
          <Button type="primary" onClick={getData}>Buscar</Button>
          </div>
        </Col>
      </Row>
      </div>
      
      <div style={{ background: '#fff', padding: '25px 185px', minHeight: 280 , margin: '25px 50px'}}>
      <TenantItems data={tenantItems}/>

      </div>

    </LayoutDesign>
  );
};

export default Home;
