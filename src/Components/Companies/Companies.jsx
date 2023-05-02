import React from "react";
import { Link, useLocation } from "react-router-dom";
import Company from "../Companies/Style/Companies.module.css";

const Companies = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={Company.company_page}>
        {/* <div className={Company.company_header}> */}
        <div className={Company.company_nav}>
          <Link to="/all_companies">
            <div
              className={
                pathname === "/all_companies"
                  ? `${Company.companyBox_active} ${Company.all_companies}`
                  : `${Company.companyBox} ${Company.all_companies}`
              }
            >
              <div className={Company.con_btn}>
                {/* <i className="all fa-solid fa-bars"></i> */}
                <p>All Companies</p>
              </div>
            </div>
          </Link>

          {/* <!-- Subckribtions --> */}
          <Link to="/subckribtions">
            <div
              className={
                pathname === "/subckribtions"
                  ? `${Company.companyBox_active} ${Company.subscription} ${Company.con}`
                  : `${Company.companyBox} ${Company.subscription}`
              }
            >
              <div className={Company.con_btn}>
                {/* <i className="fa-solid fa-dollar-sign"></i> */}
                <p>Subscription</p>
              </div>
            </div>
          </Link>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Companies;
