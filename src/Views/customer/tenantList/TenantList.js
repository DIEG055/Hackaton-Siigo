import React from "react";
import { Row, Col, Button} from "antd";
import Layout from "../../../Components/common/Common";
import ListItems from "../../../Components/list/TenantItems";

const TenantList = () => {
  return (
    <Layout>
        <ListItems/>
    </Layout>
  );
};

export default TenantList;
