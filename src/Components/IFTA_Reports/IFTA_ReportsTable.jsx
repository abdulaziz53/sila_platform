import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import IftaTb from "./IFTA_ReportsTable.module.css";

const span = {
  height: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "12px",
  color: "#000000",
};

function Confirm({ openDownloadReport, handleConfirmDownloadReport }) {
  return (
    <>
      <Box
        className={
          openDownloadReport
            ? `${IftaTb.ifta_dwl__confirm} ${IftaTb.ifta_show}`
            : `${IftaTb.ifta_dwl__confirm}`
        }
      >
        <Box className={IftaTb.dntd_dwl__confirm_content}>
          {/* Top */}
          <Box className={IftaTb.dwl_ifta_title}>
            <Typography>Download report</Typography>
          </Box>

          {/* Main box start */}
          <Box className={IftaTb.ifta_dwl__content}>
            <Box className={IftaTb.ifta_cont}>
              <Box className={IftaTb.ifta__inp_date}>
                <label>From:</label>
                <input type="date" />
              </Box>
              <Box className={IftaTb.ifta__inp_date}>
                <label>To:</label>
                <input type="date" />
              </Box>
            </Box>
          </Box>
          {/* Main box end */}

          {/* bottom */}
          <Box className={IftaTb.ifta_dw_btm}>
            <button
              className={`${IftaTb.dw_btn} ${IftaTb.dw_close_btn}`}
              onClick={() => handleConfirmDownloadReport(false)}
            >
              Cansel
            </button>
            <button
              className={`${IftaTb.dw_btn} ${IftaTb.dw_save_btn}`}
              onClick={() => handleConfirmDownloadReport(true)}
            >
              Download
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={IftaTb.ifta_dwl__overlay}
        onClick={() => handleConfirmDownloadReport(false)}
      />
    </>
  );
}

const IFTA_ReportsTable = () => {
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  const [openDownloadReport, setOpenDownloadReport] = React.useState(false);

  const handleConfirmDownloadReport = (DownloadReport) => {
    if (DownloadReport) {
      console.log("Drivers Edit");
    }

    setOpenDownloadReport(false);
  };

  return (
    <>
      <tbody>
        <tr>
          <td>
            <span style={span}>
              <input type="checkbox" />
            </span>
          </td>
          <td>
            <span style={span}>Ilon</span>
          </td>
          <td>
            <span style={span}>musk</span>
          </td>
          <td>
            <span style={span}>ilonmusk</span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight</span>
          </td>
          <td>
            <span style={span}>01</span>
          </td>
          <td>
            <span style={span}>0555555555555</span>
          </td>
          <td>
            <span style={span}>Ilon Musk</span>
          </td>
          <td>
            <span style={span}>active</span>
          </td>

          <td
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="">
              <span
                style={{
                  color: "#004665",
                  marginRight: "8px",
                }}
              >
                <i
                  className="fa-solid fa-file-invoice"
                  onClick={() => setOpenDownloadReport(true)}
                ></i>
              </span>
            </Link>
          </td>
        </tr>
      </tbody>
      <Confirm
        openDownloadReport={openDownloadReport}
        handleConfirmDownloadReport={handleConfirmDownloadReport}
      />
    </>
  );
};

export default IFTA_ReportsTable;
