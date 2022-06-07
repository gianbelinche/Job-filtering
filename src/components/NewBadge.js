import React from "react";
import "antd/dist/antd.css";
import Badge from "./Bagde";

export default function NewBadge(props) {
  return (
    <Badge
      color="hsl(174, 27.62%, 61.18%)"
      text="New!"
      visible={props.visible}
    ></Badge>
  );
}
