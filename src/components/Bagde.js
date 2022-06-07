import React from "react";
import "antd/dist/antd.css";
import { Tag } from "antd";

export default function Badge(props) {
  return (
    <Tag
      color={props.color}
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "15px",
        height: 30,
      }}
      visible={props.visible}
    >
      <p style={styles.text}>{props.text}</p>
    </Tag>
  );
}

const styles = {
  text: {
    fontFamily: "League Spartan",
    fontSize: "15px",
    marginTop: 5,
  },
};
