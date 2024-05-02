import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";
import { Urls } from "../../res/values/Urls";
const items = [
  {
    label: <Link to={Urls.dataSource}>Create Source</Link>,
  },
  {
    label: <Link to={Urls.createRules}>Create Rules</Link>,
  },
];
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
