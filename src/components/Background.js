import React from "react";
import { Image } from "antd";

export default function Background() {
  return (
    <div style={{ background: "hsl(180, 29%, 50%)" }}>
      <Image
        src={"/Job-filtering/images/bg-header-desktop.svg"}
        preview={false}
        style={{ width: "140%" }}
      />
    </div>
  );
}
