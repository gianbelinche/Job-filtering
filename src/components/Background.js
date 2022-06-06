import React from "react";
import { Image } from "antd";
import background_image from "../images/bg-header-desktop.svg";

export default function Background() {
  return (
    <Image src={background_image} preview={false} style={{ width: "100%" }} />
  );
}
