import React, { useState } from "react";
import css from "./datasource.module.css";
import BaseTemplate from "../BaseTemplate";
import DataTree from "./DataTree";
import { Input, Modal, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const DataSource = ({ pModel }) => {
  const [inputLocationData, setInputLocationData] = useState();
  const [inputLocationClick, setInputLocationClick] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(pModel);


  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleBrowse = () => {
    console.log(inputLocationData);
    setInputLocationClick(!inputLocationClick);
  };
  return (
    <BaseTemplate>
      {inputLocationClick && (
        <div className={css.mainInputLocation}>
          <div className={css.innerInputLocation}>
            <DataTree />
          </div>
        </div>
      )}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
      <input
        type="text"
        value={inputLocationData}
        onChange={(e) => setInputLocationData(e.target.value)}
      />
      <button onClick={handleBrowse}>Browse</button>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
    </BaseTemplate>
  );
};

export default DataSource;
