import React, { useState } from "react";
import "antd/dist/antd.css";
import { List, Avatar,Select,  Skeleton  } from "antd";
import DrawerInvoice from "../drawerInvoice/DrawerInvoice";
import "./index.css"


const ProductItems = props => {
  const listData = props.data;
  const [visible, setVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const showDrawer = (item) => {
    setItemSelected(item);
    setVisible(true);
  };
  const onClose = () => {
    setItemSelected({});
    setVisible(false);
  };

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3
        }}
        dataSource={listData}

        renderItem={item => (
          <List.Item
          actions={[<a key="list-loadmore-edit" onClick={() => showDrawer(item)}>Detalles</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.tenant}</a>}
            />
            <div>{item.date}</div>
            <div>{item.quantity}</div>
          </Skeleton>
        </List.Item>
        )}
      />
      <DrawerInvoice
        data={itemSelected}
        onClose={onClose}
        visible={visible}
      ></DrawerInvoice>
    </div>
  );
};

export default ProductItems;
