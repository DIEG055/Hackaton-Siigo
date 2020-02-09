import React from 'react'
import "antd/dist/antd.css";
import { List, Avatar } from 'antd';



const CartItems = (props) => {

  const { data} = props;

return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="texto de prueba"
        />
      </List.Item>
    )}
  />
)
}

export default CartItems;
