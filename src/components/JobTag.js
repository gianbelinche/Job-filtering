import React from "react";
import "antd/dist/antd.css";
import { Tag } from "antd";

const color_hovered = "hsl(174, 27.62%, 61.18%)";
const color_not_hovered = "hsl(180, 31%, 95%)";

export default function JobTag(props) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
      onClick={() => props.onClick(props.text)}
    >
      <Tag
        color={hovered ? color_hovered : color_not_hovered}
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <h2 style={hovered ? styles.name_hovered : styles.name_not_hovered}>
          {props.text}
        </h2>
      </Tag>
    </div>
  );
}

const styles = {
  name_not_hovered: {
    fontFamily: "League Spartan",
    color: "hsl(174, 27.62%, 61.18%)",
    fontWeight: 500,
    marginTop: 10,
  },
  name_hovered: {
    fontFamily: "League Spartan",
    color: "hsl(180, 31%, 95%)",
    fontWeight: 500,
    marginTop: 10,
  },
};
