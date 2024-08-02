import React from "react";

import { Flex, Radio } from "antd";

export default function OrderCreate() {
  return (
    <div className="container grid m-auto">
      <div className="flex flex-row">
        <h4>Tạo hóa đơn bán hàng</h4>
        <Flex vertical gap="middle">
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Bán lẻ</Radio.Button>
            <Radio.Button value="b">Bán sỉ</Radio.Button>
          </Radio.Group>
        </Flex>
      </div>
    </div>
  );
}
