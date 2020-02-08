import React, { useState } from "react";
import "antd/dist/antd.css";
import { List, Avatar, Icon, Skeleton  } from "antd";
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
import DrawerInvoice from "../drawerInvoice/DrawerInvoice";
import "./index.css"

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
          actions={[<a key="list-loadmore-edit" onClick={showDrawer}>Detalles</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
        )}
      />
      <DrawerInvoice
        data={[]}
        onClose={onClose}
        visible={visible}
      ></DrawerInvoice>
    </div>
  );
};

export default ProductItems;
