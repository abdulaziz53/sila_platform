import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import AddDr from "./AddNewDrivers.module.css";

function Confirm({ openAddDrivers, handleConfirmAddDrivers }) {
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
          openAddDrivers
            ? `${AddDr.addDr_confirm} ${AddDr.addDr_show}`
            : `${AddDr.addDr_confirm}`
        }
      >
        <Box className={AddDr.addDr_confirm_content}>
          {/* add top */}
          <Box className={AddDr.add_drivers_title}>
            <Typography>Add new driver</Typography>
          </Box>

          {/* main start */}
          <Box className={AddDr.dr_add__main_box}>
            <Box className={AddDr.add_dr_main}>
              {/*  */}
              <Box className={AddDr.dr_main_cont}>
                <Box className={AddDr.cont_inner}>
                  <label>Please enter name:</label>
                  <input type="text" placeholder="Alex" />
                </Box>
                <Box className={AddDr.cont_inner}>
                  <label>Please enter surname:</label>
                  <input type="text" placeholder="Alex" />
                </Box>
              </Box>
              {/*  */}
              <Box className={AddDr.dr_main_cont}>
                <Box className={AddDr.cont_inner}>
                  <label>Please enter email:</label>
                  <input type="email" placeholder="Alex" />
                </Box>
                <Box className={AddDr.cont_inner}>
                  <label>Please enter Phone number :</label>
                  <input type="text" placeholder="Alex" />
                </Box>
              </Box>
              {/*  */}
              <Box className={AddDr.dr_main_cont_2}>
                <Box className={AddDr.cont_inner_2}>
                  <label>Please enter login :</label>
                  <input type="text" placeholder="Alex" />
                </Box>

                <input type="text" placeholder="Hint text" />
                <i className="fa-solid fa-eye"></i>
                <input type="text" placeholder="Hint text" />
                <i className="fa-solid fa-eye"></i>
              </Box>
              {/*  */}
              <Box className={AddDr.dr_main_cont_3}>
                <Box className={AddDr.cont_inner_3}>
                  <label>Driver License Number</label>

                  <input
                    className={AddDr.second_inp}
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
                <Box className={AddDr.cont_inner_sl}>
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
              <Box className={AddDr.dr_main_cont_bt}>
                <label>Please choose truck:</label>
                <select>
                  <option value="">01</option>
                </select>
              </Box>
            </Box>
          </Box>
          {/* main end */}

          {/* add bottom start */}
          <Box className={AddDr.add_dr_btm}>
            <button
              className={`${AddDr.dr_btn} ${AddDr.dr_close_btn}`}
              onClick={() => handleConfirmAddDrivers(false)}
            >
              Cansel
            </button>
            <button
              className={`${AddDr.dr_btn} ${AddDr.dr_save_btn}`}
              onClick={() => handleConfirmAddDrivers(true)}
            >
              Save
            </button>
          </Box>
          {/* add bottom end */}
        </Box>
      </Box>
      <div
        className={AddDr.addDr_overlay}
        onClick={() => handleConfirmAddDrivers(false)}
      />
    </>
  );
}
const AddNewDrivers = () => {
  const [openAddDrivers, setOpenAddDrivers] = React.useState(false);

  const handleConfirmAddDrivers = (addDrivers) => {
    if (addDrivers) {
      console.log("Add New Drivers");
    }

    setOpenAddDrivers(false);
  };
  return (
    <>
      <button
        className={AddDr.add_dr_btn}
        onClick={() => setOpenAddDrivers(true)}
      >
        <p>Add new truck</p>
      </button>

      <Confirm
        openAddDrivers={openAddDrivers}
        handleConfirmAddDrivers={handleConfirmAddDrivers}
      />
    </>
  );
};

export default AddNewDrivers;
