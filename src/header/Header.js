import React, { useState } from "react";
import redditIcon from "./redit.svg";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import "./Header.css";

const Header = () => {
  const [noun] = useState("user_name");
  const [rightBar, setRightBar] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="leftNavBar">
          <FaIcons.FaBars id="menuBars" />
          <img src={redditIcon} alt="" id="redditIcon" />
        </div>
        <div className="rightNavBar">
          <p className="circleWord" onClick={() => setRightBar(!rightBar)}>
            {noun.charAt(0)}
          </p>
          <p id="noun"> {noun} </p>
          <FaIcons.FaChevronDown
            id="downArrow"
            onClick={() => setRightBar(!rightBar)}
          />
        </div>
      </nav>
      <div className="mainContent">
        {rightBar ? (
          <div className="rightBar">
            <div className="d-icons" id="logout">
              <IoIcons.IoMdLogOut className="icons-sub" />
              <p> Logout </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
