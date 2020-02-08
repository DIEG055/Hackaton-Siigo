import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Icon } from "antd";
import { Form,  InputNumber, Select,Button } from 'antd';

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

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const onChangeNumber = (id,e) =>{
  console.log(id)
  console.log(e)
}

const handleClick = (id,value)=>{
  // this.props.addToCart(id);
  console.log(id)
  }

const ProductItems = (props) => {
  // const { getFieldDecorator } = props.form;
  return (
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
          <Button type="primary" >Agregar</Button>,
           
          <InputNumber min={1}  defaultValue={0} onChange={((e)=>onChangeNumber(e,item.title) )}/>,


            <IconText type="message" text="2" key="list-vertical-message" />
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
  );
};

export default ProductItems;
