import { ImageListItem } from "@mui/material";
import React from "react";
import pic from "./img1.jpg";

const Image = () => {
  return (
    <ImageListItem>
      <img alt="" src={pic} />
    </ImageListItem>
  );
};

export default Image;
