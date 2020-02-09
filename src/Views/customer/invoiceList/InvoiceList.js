import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Layout from "../../../Components/common/Common";
import InvoiceItems from "../../../Components/list/InvoiceItems";

const InvoiceList = () => {
  const [invoiceList, setInvoiceList] = useState([]);


  const getInvoiseList = () => {
    const data = [
      {
        tenant: "Siigo 1",
        date: "02/02/2020",
        quantity: 5,
        items: [
          { name: "Producto1" },
          { name: "Producto2" },
          { name: "Producto3" },
          { name: "Producto4" }
        ]
      },
      {
        tenant: "Siigo 2",
        date: "02/02/2020",
        quantity: 5,
        items: [
          { name: "Producto1" },
          { name: "Producto2" },
          { name: "Producto3" },
          { name: "Producto4" }
        ]
      },
      {
        tenant: "Siigo 3",
        date: "02/02/2020",
        quantity: 5,
        items: [
          { name: "Producto1" },
          { name: "Producto2" },
          { name: "Producto3" },
          { name: "Producto4" }
        ]
      }
    ];
    setInvoiceList(data);
  };

  useEffect(() => {
    getInvoiseList();
  }, []);

  return (
    <Layout>
      <div style={{ background: "#fff", padding: 24, margin: "25px 50px" }}>
        {/* <Details/> */}
      </div>

      <div
        style={{
          background: "#fff",
          padding: 24,
          margin: "25px 50px",
          minHeight: 280
        }}
      >
        <InvoiceItems data={invoiceList} />
      </div>
    </Layout>
  );
};

export default InvoiceList;
