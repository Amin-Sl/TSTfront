import React from "react";
import { BsFillTelephoneFill, BsReception4 } from "react-icons/bs";
import logo from "../../../assets/images/logoo.png"
import ads from "../../../assets/images/ads.jpg"
import "./topmenu.css"
const TopMenu = () => {
  return (
    <>
      <div className="top-menu has-background-black">
        <div className="container">
          <div className="columns">
            <div className="column is-two-second is-flex mt-3 ">
              <span className="pـnum has-text-white is-flex is-align-items-center">
                <BsReception4 className="ml-2 has-text-white" /> برقراری ارتباط
                : TstSport.ir@gmail.com
              </span>
            </div>
            <div className="column is-one-third is-flex ">
              <span className=" has-text-white is-flex is-align-items-center ">
                <BsFillTelephoneFill className="ml-2 " /> 09193838669
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="home-page-logo pt-3">
           <div className="container">
                <div className="columns">
                     <div className="column is-two-thirds ads">
                         <img src={ads} alt="" />
                     </div>
                     <div className="column is-one-third is-flex is-justify-content-end">
                         <img className="logo" src={logo} alt="" />
                     </div>
                </div>
           </div>
      </div> */}
    </>
  );
};

export default TopMenu;
