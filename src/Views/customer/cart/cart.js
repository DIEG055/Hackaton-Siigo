import React, {useState} from "react";
import { Row, Col, Button } from "antd";
import LayoutDesign from "../../../Components/common/Common";
import CartItems from "../../../Components/list/CartItems";
import InvoiceModal from "../../../Components/invoiceModal/InvoiceModal";
import "antd/dist/antd.css";

const Cart = () => {

  const [visible,setVisible] = useState(false);

  const showModal = () => {
    setVisible(true)
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false)
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  return (
    <React.Fragment>
      <LayoutDesign>
        <Row>
          <Col span={12} style={{}}>
            <div
              style={{
                background: "#fff",
                padding: 24,
                minHeight: 550,
                margin: "25px 50px"
              }}
            >
              <CartItems />
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                background: "#fff",
                padding: 24,
                minHeight: 100,
                margin: "25px 50px"
              }}
            >
              <h1>Detalles</h1>
            </div>
          </Col>
        </Row>
      </LayoutDesign>
      <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
      <InvoiceModal
       showModal = {showModal}
       handleCancel = {handleCancel}
       handleOk = {handleOk}
       visible = {visible}
       />
    </React.Fragment>
  );
};

export default Cart;
