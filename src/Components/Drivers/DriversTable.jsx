import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import DriversTb from "./DriversTable.module.css";

import Success from "../../Assets/Image/Success_icon.png";

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
  openDrEdit,
  handleConfirmDrEdit,
  openDrStatus,
  handleConfirmDrStatus,
  openDrDelete,
  handleConfirmDrDelete,
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
      <Box
        className={
          openDrEdit
            ? `${DriversTb.drivers_edit_confirm} ${DriversTb.drivers_show}`
            : `${DriversTb.drivers_edit_confirm}`
        }
      >
        <Box className={DriversTb.drivers_edit_confirm_content}>
          {/* add top */}
          <Box className={DriversTb.edit_drivers_title}>
            <Typography>Edit driver information:</Typography>
          </Box>

          {/* main start */}
          <Box className={DriversTb.dr_edit__main_box}>
            <Box className={DriversTb.edit_dr_main}>
              {/*  */}
              <Box className={DriversTb.dr_main_cont}>
                <Box className={DriversTb.cont_inner}>
                  <label>Please enter name:</label>
                  <input type="text" placeholder="Alex" />
                </Box>
                <Box className={DriversTb.cont_inner}>
                  <label>Please enter surname:</label>
                  <input type="text" placeholder="Alex" />
                </Box>
              </Box>
              {/*  */}
              <Box className={DriversTb.dr_main_cont}>
                <Box className={DriversTb.cont_inner}>
                  <label>Please enter email:</label>
                  <input type="email" placeholder="Alex" />
                </Box>
                <Box className={DriversTb.cont_inner}>
                  <label>Please enter Phone number :</label>
                  <input type="text" placeholder="Alex" />
                </Box>
              </Box>
              {/*  */}
              <Box className={DriversTb.dr_main_cont_2}>
                <Box className={DriversTb.cont_inner_2}>
                  <label>Please enter login :</label>
                  <input type="text" placeholder="Alex" />
                </Box>

                <input type="text" placeholder="Change Password " />
              </Box>
              {/*  */}
              <Box className={DriversTb.dr_main_cont_3}>
                <Box className={DriversTb.cont_inner_3}>
                  <label>Driver License Number</label>

                  <input
                    className={DriversTb.second_inp}
                    type="text"
                    value={password}
                    onChange={handlePasswordChange}
                    maxLength={passwordLength}
                    placeholder="2313564584610"
                  />
                  {!isPasswordValid && (
                    <div style={{ color: "red", fontSize: "13px" }}>
                      The password length should be {passwordLength} characters
                      for {selectValue}
                    </div>
                  )}
                </Box>
                <Box className={DriversTb.cont_inner_sl}>
                  <label>License State:</label>

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
              {/*  */}
              <Box className={DriversTb.dr_main_cont_bt}>
                <label>Please choose truck:</label>
                <select>
                  <option value="">01</option>
                </select>
              </Box>
            </Box>
          </Box>
          {/* main end */}

          {/* add bottom start */}
          <Box className={DriversTb.edit_dr_btm}>
            <button
              className={`${DriversTb.dr_btn} ${DriversTb.dr_close_btn}`}
              onClick={() => handleConfirmDrEdit(false)}
            >
              Cansel
            </button>
            <button
              className={`${DriversTb.dr_btn} ${DriversTb.dr_save_btn}`}
              onClick={() => handleConfirmDrEdit(true)}
            >
              Save
            </button>
          </Box>
          {/* add bottom end */}
        </Box>
      </Box>
      <div
        className={DriversTb.drivers_edit_overlay}
        onClick={() => handleConfirmDrEdit(false)}
      />

      {/* Drivers Status Dialo Window start */}
      <Box
        className={
          openDrStatus
            ? `${DriversTb.drivers_status__confirm} ${DriversTb.drivers_show}`
            : `${DriversTb.drivers_status__confirm}`
        }
      >
        <Box className={DriversTb.dr_status__confirm_content}>
          {/* Top */}
          <Box className={DriversTb.status_drivers_title}>
            <Typography>Change status</Typography>
          </Box>
          {/* Main box start */}
          <Box className={DriversTb.dr_status__content}>
            <img src={Success} alt="" />
            <Typography>Driver’s status successfelly changed!</Typography>
          </Box>
          {/* Main box end */}

          {/* bottom */}
          <Box className={DriversTb.dr_status_btm}>
            <button
              className={`${DriversTb.dr_btn} ${DriversTb.dr_save_btn}`}
              onClick={() => handleConfirmDrStatus(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={DriversTb.drivers_status__overlay}
        onClick={() => handleConfirmDrStatus(false)}
      />
      {/* Drivers Status Dialog Window end */}

      {/* Drivers Delete Dialo Window start */}
      <Box
        className={
          openDrDelete
            ? `${DriversTb.drivers_status__confirm} ${DriversTb.drivers_show}`
            : `${DriversTb.drivers_status__confirm}`
        }
      >
        <Box className={DriversTb.dr_status__confirm_content}>
          {/* Top */}
          <Box className={DriversTb.status_drivers_title}>
            <Typography>Delete status</Typography>
          </Box>
          {/* Main box start */}
          <Box className={DriversTb.dr_status__content}>
            <img src={Success} alt="" />
            <Typography>Driver successfelly deleted !</Typography>
          </Box>
          {/* Main box end */}

          {/* bottom */}
          <Box className={DriversTb.dr_status_btm}>
            <button
              className={`${DriversTb.dr_btn} ${DriversTb.dr_save_btn}`}
              onClick={() => handleConfirmDrDelete(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={DriversTb.drivers_status__overlay}
        onClick={() => handleConfirmDrDelete(false)}
      />
      {/* Drivers Delete Dialog Window end */}
    </>
  );
}

const DriversTable = () => {
  const [openDrEdit, setopenDrEdit] = React.useState(false);

  const [openDrStatus, setopenDrStatus] = React.useState(false);

  const [openDrDelete, setopenDrDelete] = React.useState(false);

  const handleConfirmDrEdit = (result) => {
    if (result) {
      console.log("Drivers Edit");
    }
    setopenDrEdit(false);
  };

  const handleConfirmDrStatus = (Status) => {
    if (Status) {
      console.log("Drivers Status");
    }
    setopenDrStatus(false);
  };

  const handleConfirmDrDelete = (Delete) => {
    if (Delete) {
      console.log("Drivers Delete");
    }
    setopenDrDelete(false);
  };

  function ToggleSwitch() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleClick = () => {
      setIsToggleOn(!isToggleOn);
    };

    return (
      <div onClick={handleClick} className={DriversTb.ToggleSwitch}>
        <div
          className={
            isToggleOn
              ? `${DriversTb.knob} ${DriversTb.active}`
              : `${DriversTb.knob}`
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
            <span style={span}>rolling to trailer</span>
          </td>
          <td>
            <span style={span}>Ilon Musk</span>
          </td>
          <td>
            <span style={span}>active</span>
          </td>

          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-file-pen"
                  onClick={() => setopenDrEdit(true)}
                ></i>
              </span>
            </Link>
            <span onClick={() => setopenDrStatus(true)}>
              <ToggleSwitch />
            </span>
            {/* <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-toggle-off"
                  onClick={() => setopenDrStatus(true)}
                ></i>
              </span>
            </Link> */}
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => setopenDrDelete(true)}
                ></i>
              </span>
            </Link>
          </td>
        </tr>
      </tbody>
      <Confirm
        openDrEdit={openDrEdit}
        handleConfirmDrEdit={handleConfirmDrEdit}
        openDrStatus={openDrStatus}
        handleConfirmDrStatus={handleConfirmDrStatus}
        openDrDelete={openDrDelete}
        handleConfirmDrDelete={handleConfirmDrDelete}
      />
    </>
  );
};

export default DriversTable;
