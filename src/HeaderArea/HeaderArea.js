import React from "react";
import './HeaderArea.css';
import { AiFillHome, AiOutlineSearch, AiFillShop, AiOutlineTable } from "react-icons/ai";
import { MdOndemandVideo } from 'react-icons/md';
import { FaBell, FaFacebook, FaFacebookMessenger, FaUsers } from 'react-icons/fa';
import { BsController } from "react-icons/bs";
import { TiThSmall } from 'react-icons/ti';
import MainArea from "../MainArea/MainArea";


function HeaderArea(){
  return (
    <div className="HomePage">
      <div className="header">
        <div className="first-header">
          <div className="logo">
            <FaFacebook fontSize="4.5rem" color="#1877F2"/>
          </div>
          <div className="Search">
            <AiOutlineSearch fontSize="2.3rem" color="#444648"/>
            <input placeholder="Search Facebook" type="Search" />
          </div>
        </div>
        <div className="middle-header">
          <div className="Icon">
            <AiFillHome fontSize="3.2rem" color="#1877F2" />
          </div>
          <div className="Icon">
            <FaUsers fontSize="3.2rem" />
          </div>
          <div className="Icon">
            <MdOndemandVideo fontSize="3.2rem" />
          </div>
          <div className="Icon">
            <AiFillShop fontSize="3.2rem" />
          </div>
          <div className="Icon">
            <BsController fontSize="3.2rem" />
          </div>
        </div>
        <div className="third-header">
          <div className="Plus">
            <TiThSmall  fontSize="2rem" />
          </div>
          <div className="Plus">
            <FaFacebookMessenger fontSize="2rem" />
          </div>
          <div className="Plus">
            <FaBell fontSize="2rem" />
          </div>
          <div className="Pluss">
            <img src="/images/dp1.jpg" alt="dp"/>
          </div>
        </div>
      </div>
      <MainArea />
    </div>
  )
}

export default HeaderArea;