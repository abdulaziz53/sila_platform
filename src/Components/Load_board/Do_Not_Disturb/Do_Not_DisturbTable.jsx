import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import DoNotDs from "./Do_Not_DisturbTable.module.css";

const span = {
  height: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "12px",
  color: "#000000",
};

function Confirm({ openLocation, handleConfirmLocation }) {
  return (
    <>
      <Box
        className={
          openLocation
            ? `${DoNotDs.doNotDs_loc__confirm} ${DoNotDs.doNotDs_show}`
            : `${DoNotDs.doNotDs_loc__confirm}`
        }
      >
        <Box className={DoNotDs.dntd_loc__confirm_content}>
          {/* Top */}
          <Box className={DoNotDs.loc_doNotDs_title}>
            <Typography>Current location</Typography>
          </Box>

          {/* Main box start */}
          <Box className={DoNotDs.dntd_loc__content}>
            <Box className={DoNotDs.dntd_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387199.60873422417!2d-74.55402117692708!3d40.69606496876443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2skg!4v1675325027417!5m2!1sru!2skg"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  padding: "0",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
          {/* Main box end */}

          {/* bottom */}
          <Box className={DoNotDs.dntd_loc_btm}>
            <button
              className={`${DoNotDs.dntd_btn} ${DoNotDs.dntd_save_btn}`}
              onClick={() => handleConfirmLocation(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={DoNotDs.doNotDs_loc__overlay}
        onClick={() => handleConfirmLocation(false)}
      />
    </>
  );
}

const Do_Not_DisturbTable = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [openLocation, setopenLocation] = React.useState(false);

  const handleConfirmLocation = (result) => {
    if (result) {
      console.log("Drivers Edit");
    }

    setopenLocation(false);
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
            <span style={span}>1001A</span>
          </td>
          <td>
            <span style={span}>Alex Max</span>
          </td>
          <td>
            <span style={span}>Venture motor freight</span>
          </td>
          <td>
            <span style={span}>Portland OR</span>
          </td>
          <td>
            <span style={span}>wanna sleep</span>
          </td>

          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-location-dot"
                  onClick={() => setopenLocation(true)}
                ></i>
              </span>
            </Link>
          </td>
        </tr>
      </tbody>
      <Confirm
        openLocation={openLocation}
        handleConfirmLocation={handleConfirmLocation}
      />
    </>
  );
};

export default Do_Not_DisturbTable;
