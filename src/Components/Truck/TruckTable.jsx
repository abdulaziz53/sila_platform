import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import TruckTb from "./TruckTable.module.css";

import Success from "../../Assets/Image/Success_icon.png";

const statesOfUsa = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const span = {
  borderRight: "1px solid #004665",
  height: "15px",
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "12px",
  color: "#000000",
};

function Confirm({
  openTrEdit,
  handleConfirmTrEdit,
  openTrStatus,
  handleConfirmTrStatus,
  openTrDelete,
  handleConfirmTrDelete,
}) {
  const [selectValue, setSelectValue] = useState("");
  const [password, setPassword] = useState("");

  const passwordLengthMap = {
    NewYork: 8,
    Alabama: 13,
    Mississippi: 10,
    California: 9,
    Texas: 11,
    Florida: 12,
    Georgia: 14,
    Ohio: 7,
    Pennsylvania: 15,
    Illinois: 6,
  };

  const handleSelectChange = (event) => {
    setPassword("");
    setSelectValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const passwordLength = passwordLengthMap[selectValue] || 0;

  const isPasswordValid = password.length === passwordLength;
  return (
    <>
      {/* Truck Edit Dialo Window start */}
      <Box
        className={
          openTrEdit
            ? `${TruckTb.truck_edit__confirm} ${TruckTb.truck_show}`
            : `${TruckTb.truck_edit__confirm}`
        }
      >
        <Box className={TruckTb.truck_edit__confirm_content}>
          {/* top */}
          <Box className={TruckTb.edit_truck_title}>
            <Typography>Edit truck information</Typography>
          </Box>
          {/* main */}
          <Box className={TruckTb.tr_edit__main_box}>
            <Box className={TruckTb.tr_main_inner}>
              <Box className={TruckTb.inner_cont}>
                <label>Please enter truck#:</label>
                <input type="text" placeholder="1001A" />
              </Box>
              <Box className={`${TruckTb.inner_cont} ${TruckTb.inner_cont_2}`}>
                <label>Please enter VIN number:</label>
                <input
                  className={TruckTb.second_inp}
                  type="text"
                  value={password}
                  onChange={handlePasswordChange}
                  maxLength={passwordLength}
                  placeholder="3BHDLDLFJS56788"
                />
                {!isPasswordValid && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    The password length should be {passwordLength} characters
                    for {selectValue}
                  </div>
                )}
              </Box>
            </Box>
            <Box className={TruckTb.tr_main_inner}>
              <Box className={TruckTb.inner_cont}>
                <label>Please enter License plate :</label>
                <input type="text" placeholder="P30089274" />
              </Box>
              <Box className={TruckTb.inner_cont}>
                <label>Choose license state:</label>

                <select value={selectValue} onChange={handleSelectChange}>
                  <option value="">Select a state</option>
                  {Object.keys(passwordLengthMap).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </Box>
            </Box>
            <Box className={TruckTb.tr_main_inner}>
              <Box className={TruckTb.inner_2_cont}>
                <label>MAKE:</label>
                <input type="text" placeholder="TR" />
              </Box>
              <Box className={TruckTb.inner_2_cont}>
                <label>Model:</label>
                <input type="text" placeholder="VOLVO" />
              </Box>
              <Box className={TruckTb.inner_2_cont}>
                <label>Year:</label>
                <select name="" id="">
                  <option value="">2022</option>
                </select>
              </Box>
            </Box>
            <Box className={TruckTb.tr_main_inner}>
              <Box className={TruckTb.inner_cont}>
                <label>Diesel type:</label>
                <input type="text" placeholder="P30089274" />
              </Box>
              <Box className={TruckTb.inner_cont}>
                <label>Status :</label>
                <select name="" id="">
                  <option value="">Choose status</option>
                  <option value="">Active</option>
                  <option value="">Inactive</option>
                </select>
              </Box>
            </Box>
            <Box className={TruckTb.tr_main_inner}>
              <Box className={TruckTb.inner_2_cont}>
                <label>ELD serial:</label>
                <input type="text" placeholder="PT30_" />
              </Box>
              <Box className={TruckTb.inner_2_cont}>
                <label>last PT code :</label>
                <input type="text" placeholder="1223" />
              </Box>
              <Box className={TruckTb.inner_2_cont}>
                <label>PT 30 id number:</label>
                <input type="text" placeholder="3B123236762" />
              </Box>
            </Box>
          </Box>
          {/* main end */}

          {/* bottom */}
          <Box className={TruckTb.edit_tr_btm}>
            <button
              className={`${TruckTb.tr_btn} ${TruckTb.tr_close_btn}`}
              onClick={() => handleConfirmTrEdit(false)}
            >
              Cansel
            </button>
            <button
              className={`${TruckTb.tr_btn} ${TruckTb.tr_save_btn}`}
              onClick={() => handleConfirmTrEdit(true)}
            >
              Save
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className={TruckTb.truck_edit__overlay}
        onClick={() => handleConfirmTrEdit(false)}
      />
      {/* Truck Edit Dialo Window end */}

      {/* Truck Status Dialo Window start */}
      <Box
        className={
          openTrStatus
            ? `${TruckTb.truck_status__confirm} ${TruckTb.truck_show}`
            : `${TruckTb.truck_status__confirm}`
        }
      >
        <Box className={TruckTb.tr_status__confirm_content}>
          {/* Top */}
          <Box className={TruckTb.status_truck_title}>
            <Typography>Change truck status</Typography>
          </Box>
          {/* Main box start */}
          <Box className={TruckTb.tr_status__content}>
            <img src={Success} alt="" />
            <Typography>Truck status successfelly changed</Typography>
          </Box>
          {/* Main box end */}

          {/* bottom */}
          <Box className={TruckTb.tr_status_btm}>
            <button
              className={`${TruckTb.tr_btn} ${TruckTb.tr_close_btn}`}
              onClick={() => handleConfirmTrStatus(false)}
            >
              Cancel
            </button>
            <button
              className={`${TruckTb.tr_btn} ${TruckTb.tr_save_btn}`}
              onClick={() => handleConfirmTrStatus(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={TruckTb.truck_status__overlay}
        onClick={() => handleConfirmTrStatus(false)}
      />
      {/* Truck Status Dialog Window end */}

      {/* Truck Delete Dialig Window start */}
      <Box
        className={
          openTrDelete
            ? `${TruckTb.truck_status__confirm} ${TruckTb.truck_show}`
            : `${TruckTb.truck_status__confirm}`
        }
      >
        <Box className={TruckTb.tr_status__confirm_content}>
          {/* Top */}
          <Box className={TruckTb.status_truck_title}>
            <Typography>Delete truck information</Typography>
          </Box>
          {/* Main box start */}
          <Box className={TruckTb.tr_status__content}>
            <img src={Success} alt="" />
            <Typography>Truck information successfelly deleted</Typography>
          </Box>
          {/* Main box end */}

          {/* bottom */}
          <Box className={TruckTb.tr_status_btm}>
            <button
              className={`${TruckTb.tr_btn} ${TruckTb.tr_close_btn}`}
              onClick={() => handleConfirmTrDelete(false)}
            >
              Cancel
            </button>
            <button
              className={`${TruckTb.tr_btn} ${TruckTb.tr_save_btn}`}
              onClick={() => handleConfirmTrDelete(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={TruckTb.truck_status__overlay}
        onClick={() => handleConfirmTrDelete(false)}
      />
      {/* Truck Delete Dialig Window end */}
    </>
  );
}

const TruckTable = () => {
  const [openTrEdit, setopenTrEdit] = React.useState(false);

  const [openTrStatus, setopenTrStatus] = React.useState(false);

  const [openTrDelete, setopenTrDelete] = React.useState(false);

  const handleConfirmTrEdit = (result) => {
    if (result) {
      console.log("Truck Edit");
    }

    setopenTrEdit(false);
  };

  const handleConfirmTrStatus = (Status) => {
    if (Status) {
      console.log("Truck Status");
    }

    setopenTrStatus(false);
  };

  const handleConfirmTrDelete = (Delete) => {
    if (Delete) {
      console.log("Truck Delete");
    }

    setopenTrDelete(false);
  };

  function ToggleSwitch() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleClick = () => {
      setIsToggleOn(!isToggleOn);
    };

    return (
      <div onClick={handleClick} className={TruckTb.ToggleSwitch}>
        <div
          className={
            isToggleOn ? `${TruckTb.knob} ${TruckTb.active}` : `${TruckTb.knob}`
          }
        />
        {isToggleOn ? "on" : "off"}
      </div>
    );
  }

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
            <span style={span}>3AKLGKDN55HSHDDJ</span>
          </td>
          <td>
            <span style={span}>P8007HY</span>
          </td>
          <td>
            <span style={span}>Alex Max</span>
          </td>
          <td>
            <span style={span}>Volvo truck</span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight</span>
          </td>
          <td>
            <span style={span}>PT30_1234</span>
          </td>
          <td>
            <span style={span}>3B00000744</span>
          </td>
          <td>
            <span style={span}>active</span>
          </td>

          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-file-pen"
                  onClick={() => setopenTrEdit(true)}
                ></i>
              </span>
            </Link>
            <span onClick={() => setopenTrStatus(true)}>
              <ToggleSwitch />
            </span>
            {/* <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-toggle-off"
                  onClick={() => setopenTrStatus(true)}
                ></i>
              </span>
            </Link> */}
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => setopenTrDelete(true)}
                ></i>
              </span>
            </Link>
          </td>
        </tr>
      </tbody>
      <Confirm
        openTrEdit={openTrEdit}
        handleConfirmTrEdit={handleConfirmTrEdit}
        openTrStatus={openTrStatus}
        handleConfirmTrStatus={handleConfirmTrStatus}
        openTrDelete={openTrDelete}
        handleConfirmTrDelete={handleConfirmTrDelete}
      />
    </>
  );
};

export default TruckTable;
