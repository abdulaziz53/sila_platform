import React from "react";

import Nav from "../NavigationLeft/NavigationLeft.module.css";
import { Link } from "react-router-dom";

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

const NavigationLeft = () => {
  return (
    <>
      <div>
        <div className={Nav.navigate_main_bottom}>
          <div className={Nav.navigate_bottom}>
            <div className={Nav.nav_components}>
              <Link to="/all_companies">
                <img title="Company" src={Company} alt="" />
              </Link>
              <Link to="roles">
                <img title="Managers" src={Managers} alt="" />
              </Link>
              <Link to="/assets">
                <img title="Assets" src={Assets} alt="" />
              </Link>
              <Link to="/truck">
                <img title="Trucks" src={Trucks} alt="" />
              </Link>
              <Link to="/drivers">
                <img title="Drivers" src={Drivers} alt="" />
              </Link>
              <Link to="/all_loads">
                <img title="Loads" src={Loads} alt="" />
              </Link>
              <Link to="/all_logs">
                <img title="LOGS" src={LOGS} alt="" />
              </Link>
              <Link to="/ifta-reports">
                <img title="IFTA_reports" src={IFTA_reports} alt="" />
              </Link>
              <Link to="settings">
                <img title="Settings" src={Settings} alt="" />
              </Link>
              {/* <Link to="/transactions">
                <img title="Transactions" src={Transactions} alt="" />
              </Link> */}
              <Link to="/log-out">
                <img title="Log_out" src={Log_out} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationLeft;
