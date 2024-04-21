import React from "react";
import "./sideleft.css";
import {
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import insta from "../../../assets/images/insta.png"
import { useParams } from "react-router-dom";
import newsCard from "../../../assets/images/P3.jpg";
const SideLeft = () => {
  const { id } = useParams();
  const shareUrl = `http://www.localhost:3000/detail/${id}`;

  return (
    <div className="side-left">
      <div className="social-media has-background-white p-5">
        <h1 className="is-size-6 has-text-weight-bold mb-4">اشتراک گذاری</h1>
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon round={true} size={40} />
        </TelegramShareButton>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon round={true} size={40} />
        </LinkedinShareButton>
          <img className="insta" src={insta} alt="" />
      </div>
      <div className="detail-ads has-text-centered mt-5">
        <img src={newsCard} width="350" alt="" />
      </div>
    </div>
  );
};

export default SideLeft;
