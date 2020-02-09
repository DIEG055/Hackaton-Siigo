import React from 'react'
import "antd/dist/antd.css";
import { AutoComplete } from 'antd';
import { Link } from "react-router-dom";


const  AutoCompleteInput = (props) => {
  const names = props.data;
  return (
    <AutoComplete
      style={{ width: '100%' }}
      dataSource={names}
      placeholder="Nombre Empresa"
      filterOption={(inputValue, option) =>
        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
}

export default  AutoCompleteInput;