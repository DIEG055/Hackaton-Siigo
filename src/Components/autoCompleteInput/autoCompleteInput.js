import React from 'react'
import "antd/dist/antd.css";
import { AutoComplete } from 'antd';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

const  AutoCompleteInput = () => {
  return (
    <AutoComplete
      style={{ width: '100%' }}
      dataSource={dataSource}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) =>
        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
}

export default  AutoCompleteInput;