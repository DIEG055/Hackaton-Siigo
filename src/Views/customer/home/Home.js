import React from "react";
import { Row, Col, Button, Layout} from "antd";
import LayoutDesign from "../../../Components/common/Common";
import SearchInput from "../../../Components/autoCompleteInput/autoCompleteInput";
import TenantItems from "../../../Components/list/TenantItems";


const { Content } = Layout;

const Home = () => {
  return (
    <LayoutDesign>
      
      <div style={{ background: '#fff', padding: 24, minHeight: 100 ,margin: '25px 50px' }}>
      <Row>
        <Col style={{ width: '100%' }}>
            <h1>Busca una Empresa</h1>
          <SearchInput />
          <Button type="primary">Buscar</Button>
        </Col>
      </Row>
      </div>
      
      <div style={{ background: '#fff', padding: 24, minHeight: 280 , margin: '25px 50px'}}>
      <TenantItems/>

      </div>

    </LayoutDesign>
  );
};

export default Home;
