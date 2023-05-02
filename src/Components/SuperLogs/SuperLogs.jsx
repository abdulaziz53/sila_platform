import React from "react";
import { Link, useLocation } from "react-router-dom";

import SuperLog from "./SuperLogs.module.css";

const SuperLogs = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={SuperLog.super_page}>
        <div className={SuperLog.super_header}>
          <div className={SuperLog.super_nav}>
            {/* <!-- all_loads --> */}
            <Link to="/all_logs">
              <div
                className={
                  pathname === "/all_logs"
                    ? `${SuperLog.superBox_active} ${SuperLog.all_logs}`
                    : `${SuperLog.superBox} ${SuperLog.all_logs}`
                }
              >
                <div className={SuperLog.content_btn}>
                  {/* <i className="all fa-solid fa-bars"></i> */}
                  <p>All Logs</p>
                </div>
              </div>
            </Link>
            {/* <!-- do-not-disturb --> */}
            <Link to="/violations">
              <div
                className={
                  pathname === "/violations"
                    ? `${SuperLog.superBox_active} ${SuperLog.violations} ${SuperLog.cont}`
                    : `${SuperLog.superBox} ${SuperLog.violations}`
                }
              >
                <div className={SuperLog.content_btn}>
                  {/* <i className="fa-regular fa-file-lines"></i> */}

                  <p>Violations</p>
                </div>
              </div>
            </Link>
            {/* <!-- waiting-fot-the-loads --> */}
            <Link to="/inspected_drivers">
              <div
                className={
                  pathname === "/inspected_drivers"
                    ? `${SuperLog.superBox_active} ${SuperLog.inspected_drivers} ${SuperLog.cont}`
                    : `${SuperLog.superBox} ${SuperLog.inspected_drivers}`
                }
              >
                <div className={SuperLog.content_btn}>
                  {/* <i className="fa-regular fa-file-lines"></i> */}

                  <p>Inspected drivers</p>
                </div>
              </div>
            </Link>

            {/* <!-- transactions --> */}
            <Link to="/transactions">
              <div
                className={
                  pathname === "/transactions"
                    ? `${SuperLog.superBox_active} ${SuperLog.inspected_drivers} ${SuperLog.cont}`
                    : `${SuperLog.superBox} ${SuperLog.inspected_drivers}`
                }
              >
                <div className={SuperLog.content_btn}>
                  {/* <i className="fa-regular fa-file-lines"></i> */}

                  <p>transactions</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperLogs;
