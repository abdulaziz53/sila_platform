import React from "react";
import { Link, useLocation } from "react-router-dom";

import Load from "./Load_board.module.css";

const Load_board = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={Load.load_page}>
        <div className={Load.load_header}>
          <div className={Load.load_nav}>
            {/* <!-- all_loads --> */}
            <Link to="/all_loads">
              <div
                className={
                  pathname === "/all_loads"
                    ? `${Load.loadBox_active} ${Load.all_loads}`
                    : `${Load.loadBox} ${Load.all_loads}`
                }
              >
                <div className={Load.cont_btn}>
                  {/* <i className="all fa-solid fa-bars"></i> */}
                  <p>All loads</p>
                </div>
              </div>
            </Link>

            {/* <!-- do-not-disturb --> */}
            <Link to="/do-not-disturb">
              <div
                className={
                  pathname === "/do-not-disturb"
                    ? `${Load.loadBox_active} ${Load.do_not_disturb} ${Load.cont}`
                    : `${Load.loadBox} ${Load.do_not_disturb}`
                }
              >
                <div className={Load.cont_btn}>
                  {/* <i className="fa-regular fa-file-lines"></i> */}

                  <p>do not disturb</p>
                </div>
              </div>
            </Link>

            {/* <!-- waiting-fot-the-loads --> */}
            <Link to="/waiting-fot-the-loads">
              <div
                className={
                  pathname === "/waiting-fot-the-loads"
                    ? `${Load.loadBox_active} ${Load.waiting_loads} ${Load.cont}`
                    : `${Load.loadBox} ${Load.waiting_loads}`
                }
              >
                <div className={Load.cont_btn}>
                  {/* <i className="fa-regular fa-file-lines"></i> */}

                  <p>waiting for the load</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Load_board;
