import React from "react";
import { Image } from "antd";

export default function Background(props) {
  return (
    <div style={{ background: "hsl(180, 29%, 50%)" }}>
      <Image src={props.background} preview={false} style={{ width: "140%" }} />
    </div>
  );
}
