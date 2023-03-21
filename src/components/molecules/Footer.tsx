import { Link, Typography } from "@mui/material";
import * as React from "react";
import "../../style.css";

export default function Footer() {
  return (
    <div style={style}>
      Copyright © 2023 WebsiteName, Inc All rights reserved
    </div>
  );
}

let style: React.CSSProperties = {
  position: "fixed",
  bottom: 0,
  textAlign: "center",
  color: "gray",
};
