import React from "react";
import { Descriptions } from 'antd';

const tenantDetails = (props) => {

  const { name, location} = props.data;

  return (
    <Descriptions title= {name}>
    <Descriptions.Item label="Location">{location}</Descriptions.Item>
    {/* /Traer todos los datos */}
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
  );
};

export default tenantDetails;
