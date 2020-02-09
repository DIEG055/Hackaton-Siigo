import React, { useState } from "react";
import "antd/dist/antd.css";

import {
  List,
   Avatar,
  InputNumber,
  Button,
} from "antd";
import DrawerDetails from "../../Components/drawerDetails/DrawerDetails";


const ProductItems = (props) => {

  const listData = props.data;
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectItem,setSelectedItem] = useState({});
 
  const showDrawer = (item) => {
    setSelectedItem(item)
    setDetailsVisible(true);
  };
  const onClose = () => {
    setSelectedItem({})
    setDetailsVisible(false);
  };

  const updateCart = (id, amount) => {
    console.log(id,amount);
  };


  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 3
        }}
        dataSource={listData}
        
        renderItem={item => (
          <List.Item
            key={item.name}
            actions={[
              <Button type="primary">Agregar</Button>,
              <Button type="primary" onClick={()=> showDrawer(item)}>
                Detalles
              </Button>,
              <InputNumber
                min={1}
                defaultValue={0}
                onChange={e => updateCart(e, item.title)}
              />
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />}
              title={<a href={item.name}>{item.name}</a>}
              description={item.name}
            />
            {item.content}
          </List.Item>
        )}
      />
      <DrawerDetails
        data={selectItem}
        onClose={onClose}
        visible={detailsVisible}
      ></DrawerDetails>
    </div>
  );
};

export default ProductItems;
