import React from 'react'
import "antd/dist/antd.css";
import { Modal, Button, Descriptions  } from 'antd';

const InvoiceModal = (props) => {

    const { visible, handleCancel,handleOk, showModal } = props;

    return (
      <React.Fragment>
       
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Descriptions
        title="Factura Generada"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item span={2} label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item span={2} label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item span={2} label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item span={2} label="Amount">$80.00</Descriptions.Item>
        <Descriptions.Item span={2} label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item span={2} label="Official">$60.00</Descriptions.Item>
        <Descriptions.Item span={2} label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
        </Descriptions.Item>
      </Descriptions>
        </Modal>
      </React.Fragment>
    );
  }

export default InvoiceModal;