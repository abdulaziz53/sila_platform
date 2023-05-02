import React from "react";
import { Link, useLocation } from "react-router-dom";

import Mng from "../Managers/Managers.module.css";

const Managers = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={Mng.company_page}>
        {/* <div className={Mng.company_header}> */}
        <div className={Mng.company_nav}>
          <Link to="/roles">
            <div
              className={
                pathname === "/roles"
                  ? `${Mng.companyBox_active} ${Mng.all_companies}`
                  : `${Mng.companyBox} ${Mng.all_companies}`
              }
            >
              <div className={Mng.con_btn}>
                {/* <i className="all fa-solid fa-bars"></i> */}
                <p>Roles</p>
              </div>
            </div>
          </Link>

          {/* <!-- Subckribtions --> */}
          <Link to="/users">
            <div
              className={
                pathname === "/users"
                  ? `${Mng.companyBox_active} ${Mng.subscription} ${Mng.con}`
                  : `${Mng.companyBox} ${Mng.subscription}`
              }
            >
              <div className={Mng.con_btn}>
                {/* <i className="fa-solid fa-dollar-sign"></i> */}
                <p>Users</p>
              </div>
            </div>
          </Link>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Managers;
