import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

import AddTr from "./AddNewTruck.module.css";

function Confirm({ openAddTruck, handleConfirmAddTruck }) {
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
          openAddTruck
            ? `${AddTr.addTr_confirm} ${AddTr.addTr_show}`
            : `${AddTr.addTr_confirm}`
        }
      >
        <Box className={AddTr.addTr_confirm_content}>
          {/* top */}
          <Box className={AddTr.edit_truck_title}>
            <Typography>Edit truck information</Typography>
          </Box>
          {/* main */}
          <Box className={AddTr.tr_edit__main_box}>
            <Box className={AddTr.tr_main_inner}>
              <Box className={AddTr.inner_cont}>
                <label>Please enter truck#:</label>
                <input type="text" placeholder="1001A" />
              </Box>
              <Box className={AddTr.inner_cont}>
                <label>Please enter VIN number:</label>

                <input
                  className={AddTr.second_inp}
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
            <Box className={AddTr.tr_main_inner}>
              <Box className={AddTr.inner_cont}>
                <label>Please enter License plate :</label>
                <input type="text" placeholder="P30089274" />
              </Box>
              <Box className={AddTr.inner_cont}>
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
            <Box className={AddTr.tr_main_inner}>
              <Box className={AddTr.inner_2_cont}>
                <label>MAKE:</label>
                <input type="text" placeholder="TR" />
              </Box>
              <Box className={AddTr.inner_2_cont}>
                <label>Model:</label>
                <input type="text" placeholder="VOLVO" />
              </Box>
              <Box className={AddTr.inner_2_cont}>
                <label>Year:</label>
                <select name="" id="">
                  <option value="">2022</option>
                </select>
              </Box>
            </Box>
            <Box className={AddTr.tr_main_inner}>
              <Box className={AddTr.inner_cont}>
                <label>Diesel type:</label>
                <input type="text" placeholder="P30089274" />
              </Box>
              <Box className={AddTr.inner_cont}>
                <label>Status :</label>
                <select name="" id="">
                  <option value="">Choose status</option>
                  <option value="">Active</option>
                  <option value="">Inactive</option>
                </select>
              </Box>
            </Box>
            <Box className={AddTr.tr_main_inner}>
              <Box className={AddTr.inner_2_cont}>
                <label>ELD serial:</label>
                <input type="text" placeholder="PT30_" />
              </Box>
              <Box className={AddTr.inner_2_cont}>
                <label>last PT code :</label>
                <input type="text" placeholder="1223" />
              </Box>
              <Box className={AddTr.inner_2_cont}>
                <label>PT 30 id number:</label>
                <input type="text" placeholder="3B123236762" />
              </Box>
            </Box>
          </Box>
          {/* main end */}

          {/* bottom */}
          <Box className={AddTr.edit_tr_btm}>
            <button
              className={`${AddTr.tr_btn} ${AddTr.tr_close_btn}`}
              onClick={() => handleConfirmAddTruck(false)}
            >
              Cansel
            </button>
            <button
              className={`${AddTr.tr_btn} ${AddTr.tr_save_btn}`}
              onClick={() => handleConfirmAddTruck(true)}
            >
              Save
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className={AddTr.addTr_overlay}
        onClick={() => handleConfirmAddTruck(false)}
      />
    </>
  );
}

const AddNewTruck = () => {
  const [openAddTruck, setOpenAddTruck] = React.useState(false);

  const handleConfirmAddTruck = (addTruck) => {
    if (addTruck) {
      console.log("Add New Truck");
    }

    setOpenAddTruck(false);
  };
  return (
    <>
      <button
        className={AddTr.add_tr_btn}
        onClick={() => setOpenAddTruck(true)}
      >
        <p>Add new truck</p>
      </button>

      <Confirm
        openAddTruck={openAddTruck}
        handleConfirmAddTruck={handleConfirmAddTruck}
      />
    </>
  );
};

export default AddNewTruck;
