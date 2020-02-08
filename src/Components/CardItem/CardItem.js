import React from "react";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

const CardItem = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
    >
      <Meta
        
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

export default CardItem;
