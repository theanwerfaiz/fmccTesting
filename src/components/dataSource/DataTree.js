import React from "react";
import { Tree } from "antd";
import { data } from "./azeem.js";
const { DirectoryTree } = Tree;
const treeData = [
  {
    title: "parent 0",
    key: "0-0",
    children: [
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-1",
        key: "0-0-1",
        isLeaf: true,
      },
    ],
  },
  {
    title: "parent 1",
    key: "0-1",
    children: [
      {
        title: "leaf 1-0",
        key: "0-1-0",
        isLeaf: true,
      },
      {
        title: "leaf 1-1",
        key: "0-1-1",
        isLeaf: true,
      },
    ],
  },
];
const DataTree = () => {
  const onSelect = (keys, info) => {
    if (info.node && info.node.path) {
      const absolutePath = info.node.path;
      console.log("Selected File:", absolutePath);
      // You can now use the absolutePath as needed, for example, send it to an API or display it in your UI
    }
    // setSelectedKeys(keys);
  };
  const onExpand = (keys, info) => {
    console.log("Trigger Expand", keys, info);
  };
  return (
    <DirectoryTree
      multiple
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={data}
      style={{
        height: "500px",
        overflow: "auto",
      }}
    />
  );
};
export default DataTree;
