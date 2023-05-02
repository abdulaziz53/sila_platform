import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import WaitingStyle from "./Waiting_For_The_LoadTable.module.css";

const WFTLoad = [
  {
    id: 1,
    truck: "1001A",
    driver: "Alex Max",
    company: "Venture motor freight",
    current_location: "Portland OR",
    comments: "want to east west",
    waiting_for: "07h 35min",
    // hos: "01:23 00:23 00:56 51:23",
    hos: {
      o: "01:23",
      t: "00:23",
      t: "00:56",
      f: "51:23",
    },
    actions: "fa-solid fa-location-dot",
  },
  {
    id: 2,
    truck: "2001A",
    driver: "David",
    company: "General Electric",
    current_location: "New York",
    comments: "want to east west",
    waiting_for: "07h 35min",
    // hos: "01:23 00:23 00:56 51:23",
    hos: {
      o: "02:23",
      t: "01:23",
      t: "01:56",
      f: "52:23",
    },
    actions: "fa-solid fa-location-dot",
  },
];

const span = {
  height: "15px",
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "12px",
  color: "#000000",
};

const spanmin = {
  height: "15px",
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "10px",
  lineHeight: "12px",
  color: "#000000",
  margin: "5px",
};

function Confirm({ openLocation, handleConfirmLocation }) {
  return (
    <>
      <Box
        className={
          openLocation
            ? `${WaitingStyle.doNotDs_loc__confirm} ${WaitingStyle.doNotDs_show}`
            : `${WaitingStyle.doNotDs_loc__confirm}`
        }
      >
        <Box className={WaitingStyle.dntd_loc__confirm_content}>
          {/* Top */}
          <Box className={WaitingStyle.loc_doNotDs_title}>
            <Typography>Current location</Typography>
          </Box>

          {/* Main box start */}
          <Box className={WaitingStyle.dntd_loc__content}>
            <Box className={WaitingStyle.dntd_map}>
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
          <Box className={WaitingStyle.dntd_loc_btm}>
            <button
              className={`${WaitingStyle.dntd_btn} ${WaitingStyle.dntd_save_btn}`}
              onClick={() => handleConfirmLocation(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={WaitingStyle.doNotDs_loc__overlay}
        onClick={() => handleConfirmLocation(false)}
      />
    </>
  );
}

const Waiting_For_The_LoadTable = ({ companyObj }) => {
  const [tablesData, setTablesData] = React.useState(WFTLoad);

  const [openLocation, setopenLocation] = React.useState(false);

  const handleConfirmLocation = (result) => {
    if (result) {
      console.log("Drivers Edit");
    }

    setopenLocation(false);
  };

  // ! filter table start
  const filterTableData = (tableDataField, searchingValue) =>
    tableDataField.toLowerCase().includes(searchingValue.toLowerCase());

  const multipleSearch = () => {
    return WFTLoad.filter((item) =>
      filterTableData(item.truck, companyObj.truck)
    )
      .filter((item) => filterTableData(item.driver, companyObj.driver))
      .filter((item) => filterTableData(item.company, companyObj.company))
      .filter((item) =>
        filterTableData(item.current_location, companyObj.current_location)
      );
  };

  useEffect(() => {
    const filteredData = multipleSearch();
    setTablesData(filteredData);
  }, [companyObj]);
  // ! filter table end

  return (
    <>
      <tbody>
        {tablesData.map((item) => (
          <tr key={item.id}>
            <td>
              <span style={span}>
                <input type="checkbox" />
              </span>
            </td>
            <td>
              <span style={span}>{item.truck}</span>
            </td>
            <td>
              <span style={span}>{item.driver}</span>
            </td>
            <td>
              <span style={span}>{item.company}</span>
            </td>
            <td>
              <span style={span}>{item.current_location}</span>
            </td>
            <td>
              <span style={span}>{item.comments}</span>
            </td>
            <td>
              <span style={span}>{item.waiting_for}</span>
            </td>
            <td style={{ display: "flex" }}>
              <span style={spanmin}>{item.hos.o}</span>
              <span style={spanmin}>{item.hos.t}</span>
              <span style={spanmin}>{item.hos.t}</span>
              <span style={spanmin}>{item.hos.f}</span>
            </td>
            <td style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#004665" }}>
                <i
                  className={item.actions}
                  onClick={() => {
                    item.actions(setopenLocation(true));
                  }}
                ></i>
              </span>
              {/* <Link to="">
                <span style={{ color: "#004665", marginRight: "8px" }}>
                  <i
                    className="fa-solid fa-location-dot"
                    onClick={() => setopenLocation(true)}
                  ></i>
                </span>
              </Link> */}
            </td>
          </tr>
        ))}
      </tbody>
      <Confirm
        openLocation={openLocation}
        handleConfirmLocation={handleConfirmLocation}
      />
    </>
  );
};

export default Waiting_For_The_LoadTable;
