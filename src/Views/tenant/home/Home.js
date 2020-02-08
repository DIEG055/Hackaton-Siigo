import React from "react";
import { Row, Col, Button, Layout} from "antd";
import LayoutDesign from "../../../Components/common/Common";
import SearchInput from "../../../Components/autoCompleteInput/autoCompleteInput";
import TenantItems from "../../../Components/list/TenantItems";
import "./index.css"

const { Content } = Layout;

const Home = () => {
  return (
    <LayoutDesign>
      
      <div style={{ background: '#fff', padding: 25, minHeight: 100 ,margin: '25px 50px' }}>
      <Row>
        <Col style={{ width: '100%' }}>
            <h1 style ={{ textAlign: "center", marginBottom: 25}}>Busca Usuarios</h1>
          <SearchInput />
          <div className='center-SearchButton' >
          <Button type="primary">Buscar</Button>
          <Button type="primary"> Mis Productos</Button>
          <Button type="primary">Facturas Generadas</Button>
          </div>
        </Col>
      </Row>
      </div>
      
    </LayoutDesign>
  );
};

export default Home;
