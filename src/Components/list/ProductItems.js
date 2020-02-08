import React, { useState } from "react";
import "antd/dist/antd.css";
import { List, Avatar, Icon } from "antd";
import {
  Form,
  InputNumber,
  Select,
  Button,
  Divider,
  Col,
  Row,
  Drawer
} from "antd";
import DrawerDetails from "../../Components/drawerDetails/DrawerDetails";

const { Option } = Select;

const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

const onChangeNumber = (id, e) => {
  console.log(id);
  console.log(e);
};

const ProductItems = props => {
  const [visible, setVisible] = useState(false);
 
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
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
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <Button type="primary">Agregar</Button>,
              <Button type="primary" onClick={showDrawer}>
                Detalles
              </Button>,
              <InputNumber
                min={1}
                defaultValue={0}
                onChange={e => onChangeNumber(e, item.title)}
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
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
      <DrawerDetails
        data={[]}
        onClose={onClose}
        visible={visible}
      ></DrawerDetails>
    </div>
  );
};

export default ProductItems;
