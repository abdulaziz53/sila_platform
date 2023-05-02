import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Box, Typography } from "@mui/material";

import UsTable from "./UsersTable.module.css";

import open_eye_icon from "../../../Assets/Image/close_eye_icon.png";
import close_eye_icon from "../../../Assets/Image/close_eye_icon.png";

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
  openUsEdit,
  handleConfirmUsEdit,
  openUsStatus,
  handleConfirmUsStatus,
  openUsDelete,
  handleConfirmUsDelete,
  type = "password",
  ...props
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!password) {
      setError("password cannot by empty");
      return;
    }

    if (!password.match(/^[A-Za-z0-9]+$/)) {
      setError("Password must contain only Latin characters and numbers");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (password.match(/^\d/)) {
      setError("Password must not start with a number");
      return;
    }
    setError(null);
  };

  const [inputType, setInputType] = useState(type);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Users Edit start */}
      <Box
        className={
          openUsEdit
            ? `${UsTable.users_edit__confirm} ${UsTable.users_show}`
            : `${UsTable.users_edit__confirm}`
        }
      >
        <Box className={UsTable.users_edit__confirm_content}>
          {/* top */}
          <Box className={UsTable.edit_users_title}>
            <Typography>Edit user</Typography>
          </Box>
          {/* main */}
          <Box className={UsTable.us_edit__main_box}>
            <Box
              className={`${UsTable.us_input} ${UsTable.us_edit__input_top}`}
            >
              <Box className={UsTable.us_edit__inp_cont}>
                <label>Please enter name:</label>
                <input type="text" placeholder="name" />
              </Box>
              <Box className={UsTable.us_edit__inp_cont}>
                <label>Please enter surname:</label>
                <input type="text" placeholder="surname" />
              </Box>
            </Box>
            <Box className={UsTable.us_input}>
              <Box className={UsTable.us_edit__inp_cont}>
                <label>Please enter email:</label>
                <input type="email" placeholder="email" />
              </Box>
              <Box className={UsTable.us_edit__inp_cont}>
                <label>Please enter Phone number:</label>
                <input type="text" placeholder="number" />
              </Box>
            </Box>

            <Box className={UsTable.us_edit__btn}>
              <button className={UsTable.main_btn}>
                <p className={UsTable.main_btn__p}>Change password</p>
              </button>
            </Box>

            <Box className={UsTable.edit_select_cont}>
              <label>Please choose company :</label>
              <select name="" id="">
                <option value="">Choose company</option>
                <option value="">Venture Motor Freight LLC</option>
              </select>
            </Box>
            <Box className={UsTable.edit_select_cont}>
              <label>Please choose simple role :</label>
              <select name="" id="">
                <option value="">Choose simple role</option>
                <option value="">Monitorting manager</option>
              </select>
            </Box>
          </Box>

          {/* main end */}

          {/* bottom */}
          <Box className={UsTable.edit_us_btm}>
            <button
              className={`${UsTable.us_btn} ${UsTable.us_close_btn}`}
              onClick={() => handleConfirmUsEdit(false)}
            >
              Cansel
            </button>
            <button
              className={`${UsTable.us_btn} ${UsTable.us_save_btn}`}
              onClick={() => handleConfirmUsEdit(true)}
            >
              Save
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className={UsTable.users_edit__overlay}
        onClick={() => handleConfirmUsEdit(false)}
      />
      {/* Users Edit end */}

      {/* Users Status start */}
      <Box
        className={
          openUsStatus
            ? `${UsTable.users_status__confirm} ${UsTable.users_show}`
            : `${UsTable.users_status__confirm}`
        }
      >
        <Box className={UsTable.us_status__confirm_content}>
          <Box className={UsTable.status_users_title}>
            <Typography>Change user’s status</Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box className={UsTable.us_status__content}>
              <div style={{ display: "flex" }}>
                <input
                  type={inputType}
                  {...props}
                  value={password}
                  placeholder="enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    transform: isVisible ? "scale(1)" : "scale(1)",
                  }}
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setInputType(inputType === "text" ? "password" : "text");
                  }}
                >
                  {inputType === "text" ? (
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={open_eye_icon}
                      alt="open_eye_icon"
                    />
                  ) : (
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={close_eye_icon}
                      alt="close_eye_icon"
                    />
                  )}
                </div>
              </div>

              {error && (
                <Alert
                  sx={{ marginRight: "20px" }}
                  size="small"
                  variant="outlined"
                  severity="error"
                >
                  {error}
                </Alert>
              )}
            </Box>

            {/* bottom */}
            <Box className={UsTable.us_status_btm}>
              <button
                className={`${UsTable.us_btn} ${UsTable.us_close_btn}`}
                onClick={() => handleConfirmUsStatus(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`${UsTable.us_btn} ${UsTable.us_save_btn}`}
                // onClick={() => handleConfirmUsStatus(true)}
              >
                Ok
              </button>
            </Box>
          </form>
        </Box>
      </Box>

      <div
        className={UsTable.users_edit__overlay}
        onClick={() => handleConfirmUsStatus(false)}
      />
      {/* Users Status end */}

      {/* Users Delete start */}
      <Box
        className={
          openUsDelete
            ? `${UsTable.users_status__confirm} ${UsTable.users_show}`
            : `${UsTable.users_status__confirm}`
        }
      >
        <Box className={UsTable.us_status__confirm_content}>
          <Box className={UsTable.status_users_title}>
            <Typography>Delete user</Typography>
          </Box>
          {/*  */}

          <form onSubmit={handleSubmit}>
            <Box className={UsTable.us_status__content}>
              <div style={{ display: "flex" }}>
                <input
                  type={inputType}
                  {...props}
                  // value={password}
                  placeholder="enter password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    transform: isVisible ? "scale(1)" : "scale(1)",
                  }}
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setInputType(inputType === "text" ? "password" : "text");
                  }}
                >
                  {inputType === "text" ? (
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={open_eye_icon}
                      alt="open_eye_icon"
                    />
                  ) : (
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={close_eye_icon}
                      alt="close_eye_icon"
                    />
                  )}
                </div>
              </div>
            </Box>

            {/* bottom */}
            <Box className={UsTable.us_status_btm}>
              <button
                className={`${UsTable.us_btn} ${UsTable.us_close_btn}`}
                onClick={() => handleConfirmUsDelete(false)}
              >
                Cancel
              </button>
              <button
                className={`${UsTable.us_btn} ${UsTable.us_save_btn}`}
                onClick={() => handleConfirmUsDelete(true)}
              >
                Ok
              </button>
            </Box>
          </form>
        </Box>
      </Box>

      <div
        className={UsTable.users_edit__overlay}
        onClick={() => handleConfirmUsDelete(false)}
      />
      {/* Users Delete end */}
    </>
  );
}

const UsersTable = () => {
  const [openUsEdit, setopenUsEdit] = React.useState(false);
  const [openUsStatus, setopenUsStatus] = React.useState(false);
  const [openUsDelete, setopenUsDelete] = React.useState(false);

  const handleConfirmUsEdit = (result) => {
    if (result) {
      console.log("Users Edit");
    }
    setopenUsEdit(false);
  };

  const handleConfirmUsStatus = (Status) => {
    if (Status) {
      console.log("Users Status");
    }
    setopenUsStatus(false);
  };

  const handleConfirmUsDelete = (Delete) => {
    if (Delete) {
      console.log("Users Delete");
    }
    setopenUsDelete(false);
  };

  function ToggleSwitch() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleClick = () => {
      setIsToggleOn(!isToggleOn);
    };

    return (
      <div onClick={handleClick} className={UsTable.ToggleSwitch}>
        <div
          className={
            isToggleOn ? `${UsTable.knob} ${UsTable.active}` : `${UsTable.knob}`
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
            <span style={span}>1</span>
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
            <span style={span}>Venture Motor Freight LLC</span>
          </td>
          <td>
            <span style={span}>monitoring manager</span>
          </td>
          <td>
            <span style={span}>Active</span>
          </td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-file-pen"
                  onClick={() => setopenUsEdit(true)}
                ></i>
              </span>
            </Link>
            <span onClick={() => setopenUsStatus(true)}>
              <ToggleSwitch />
            </span>
            {/* <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-toggle-off"
                  onClick={() => setopenUsStatus(true)}
                ></i>
              </span>
            </Link> */}
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => setopenUsDelete(true)}
                ></i>
              </span>
            </Link>
          </td>
        </tr>
      </tbody>

      <Confirm
        openUsEdit={openUsEdit}
        handleConfirmUsEdit={handleConfirmUsEdit}
        openUsStatus={openUsStatus}
        handleConfirmUsStatus={handleConfirmUsStatus}
        openUsDelete={openUsDelete}
        handleConfirmUsDelete={handleConfirmUsDelete}
      />
    </>
  );
};

export default UsersTable;
