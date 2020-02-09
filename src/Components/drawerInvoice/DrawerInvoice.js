import React from 'react'
import { Divider,Col,Row,Drawer,List } from 'antd';

const DrawerInvoice = (props) => {
    const {onClose, visible, data} = props;
    const products = data.items;
    
    const DescriptionItem = ({ title, content }) => (
        <div
          style={{
            fontSize: 14,
            lineHeight: "22px",
            marginBottom: 7,
            color: "rgba(0,0,0,0.65)"
          }}
        >
          <p
            style={{
              marginRight: 8,
              display: "inline-block",
              color: "rgba(0,0,0,0.85)"
            }}
          >
            {title}:
          </p>
          {content}
        </div>
      );

    const pStyle = {
        fontSize: 16,
        color: "rgba(0,0,0,0.85)",
        lineHeight: "24px",
        display: "block",
        marginBottom: 16
      };

    return(
        <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p style={{ ...pStyle, marginBottom: 24 }}>Detalles Factura</p>
        <p style={pStyle}>Informacion de la Factura</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Empresa" content={data.tenant} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="date" content={data.date} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Fecha de Factura" content={data.quantity} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Numero factura" content="123456789" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Impuesto" content= "$123.456.123" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Valor Total" content="$100.000" />
          </Col>
        </Row>

        
        <Divider />
        <p style={pStyle}>Productos Comprados</p>
        <List
      size="small"
      bordered
      dataSource={products}
      renderItem={item => <List.Item>{item.name}</List.Item>}
    />
      </Drawer>
       
    )
}

export default  DrawerInvoice;