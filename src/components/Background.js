import React from "react";
import { Image } from "antd";
import background_image from "../images/bg-header-desktop.svg";

export default function Background() {
  return (
    <div style={{ background: "hsl(180, 29%, 50%)" }}>
      <Image src={background_image} preview={false} style={{ width: "100%" }} />
    </div>
  );
}
