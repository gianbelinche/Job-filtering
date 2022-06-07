import React from "react";
import "antd/dist/antd.css";
import Badge from "./Bagde";

export default function FeaturedBadge(props) {
  return (
    <Badge
      color="hsl(180, 14%, 20%)"
      text="Featured"
      visible={props.visible}
    ></Badge>
  );
}
