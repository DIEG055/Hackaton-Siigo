import React  from 'react'
import { List, Avatar } from 'antd';
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import './index.css';

const TenantItems = (props) => {

  const { data } = props;

  return(
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <Link to={`/tenant/${item.title}`}>
      <List.Item>
        <p>
         
        </p>
        <List.Item.Meta
          avatar={<Avatar icon="user" />}
          title={item.title}
          
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum eius quos eum quasi unde nesciunt, vitae obcaecati vero ipsam nobis"
        />
      </List.Item>
      </Link>
    )}
  />
  )
}

export default TenantItems

