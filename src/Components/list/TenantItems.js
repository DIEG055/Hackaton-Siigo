import React  from 'react'
import { List, Avatar } from 'antd';
import "antd/dist/antd.css";

import './index.css';


const data = [
  {
    title: 'Siigo 1',
  },
  {
    title: 'Siigo 2',
  },
  {
    title: 'Siigo 3',
  },
  {
    title: 'Siigo 4',
  },
];

const TenantItems = () => {
  return(
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <p>
         
        </p>
        <List.Item.Meta
          avatar={<Avatar icon="user" />}
          title={<a href="https://ant.design">{item.title}</a>}
          
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum eius quos eum quasi unde nesciunt, vitae obcaecati vero ipsam nobis"
        />
      </List.Item>
    )}
  />
  )
}

export default TenantItems

