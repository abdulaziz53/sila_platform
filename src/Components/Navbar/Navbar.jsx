import * as React from "react";
import { Link } from "react-router-dom";

import Nav from "../Navbar/Navbar.module.css";

import Sila_eld from "../../Assets/Image/Navbar-img/Sila_eld.png";
// import notification from "../../Assets/Image/Navbar-img/notification.png";

import Company from "../../Assets/Image/nav_icons/Companies.png";
import Managers from "../../Assets/Image/nav_icons/Managers_.png";
import Assets from "../../Assets/Image/nav_icons/assets.png";
import Trucks from "../../Assets/Image/nav_icons/Truck.png";
import Drivers from "../../Assets/Image/nav_icons/Drivers.png";
import Loads from "../../Assets/Image/nav_icons/Loads.png";
import LOGS from "../../Assets/Image/nav_icons/Logs.png";
import IFTA_reports from "../../Assets/Image/nav_icons/IFTA_reports.png";
import Settings from "../../Assets/Image/nav_icons/Settings.png";
import Log_out from "../../Assets/Image/nav_icons/Log_out.png";

const Navbar = () => {
  return (
    <>
      <header className={Nav.header}>
        <nav className={Nav.navigate_top}>
          <div className={Nav.logo_sila}>
            <Link to="/home">
              <img src={Sila_eld} alt="SILA logo" />
            </Link>
          </div>
          <div className={Nav.navigate_top_right}>
            <div className={Nav.login}>
              <p>Alex Max</p>
              <p>Venture Motor Freight LLC</p>
              <p>ID 2210236548</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
