import React from "react";
import { Divider } from "antd";
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, InstagramOutlined } from "@ant-design/icons";
import "../css/Footer.css";

const footer = () => {
  return (
    <div>
      <Divider />
      <div className="media">
        <FacebookOutlined /><div className="mediaName">Facebook</div>
        <TwitterOutlined /><div className="mediaName">Twitter</div>
        <YoutubeOutlined /><div className="mediaName">YouTube</div>
        <InstagramOutlined /><div className="mediaName">Instagram</div>
      </div>
    </div>
  );
};

export default footer;
