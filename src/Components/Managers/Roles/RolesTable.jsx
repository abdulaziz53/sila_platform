import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Roles from "../Roles/RolesTable.module.css";

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
  openInvStatus,
  handleConfirmInvStatus,
  openInvDelete,
  handleConfirmInvDelete,
  openInvEdit,
  handleConfirmInvEdit,
  openDeleted,
  handleConfirmDeleted,
}) {
  return (
    <>
      {/* Roles Edit start */}
      <Box
        className={
          openInvEdit
            ? `${Roles.roles_confirm} ${Roles.roles_show}`
            : `${Roles.roles_confirm}`
        }
      >
        <Box className={Roles.roles__confirm_content}>
          <Box className={Roles.title}>
            <Typography>Create new role</Typography>
          </Box>
          <Box className={Roles.main_box}>
            <Box className={Roles.top_input}>
              <label>Role name</label>
              <input
                className={Roles.role_input}
                type="text"
                name=""
                id=""
                placeholder="Safety manager"
              />
            </Box>
            <Typography className={Roles.role_acc}>Role Access:</Typography>

            <Box className={Roles.roles_access}>
              <Box className={Roles.table_top_first}>
                <p>Access description</p>
                <p>1-action</p>
                <p>2-action</p>
                <p>3-action</p>
                <p>4-action</p>
              </Box>
              {/* 1 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Companies</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input className={Roles.inp_check} type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 2 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Company Subscription</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>View</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 3 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Invoices</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 4 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Super roles</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 5 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Simple roles</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 6 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Users</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 7 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Assets</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 8 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Drivers</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 9 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Trucks</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 10 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Dashboard</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 11 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Dashboard</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 12 */}
              <Box className={Roles.table_top_second}>
                <Box className={Roles.table_top_second__cont}>
                  <p>Dashboard</p>
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>Delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Roles.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* bottom */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              height: "65px",
              borderTop: "3px solid #004665",
            }}
          >
            <button
              className={Roles.roles__ok_btn}
              onClick={() => handleConfirmInvEdit(false)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className={Roles.roles_overlay}
        onClick={() => handleConfirmInvEdit(false)}
      />
      {/* Roles Edit end */}

      {/*  */}

      {/* Roles Status start */}
      <Box
        className={
          openInvStatus
            ? `${Roles.confirm__inv_status}
             ${Roles.show__inv_status}`
            : `${Roles.confirm__inv_status}`
        }
      >
        <Box className={Roles.inv_status__confirm_content}>
          <Box
            className={Roles.status_main_block}
            sx={{
              width: "450px",
              height: "65px",
              display: "flex",
              alignItems: "center",
              borderBottom: "3px solid #004665",
            }}
          >
            <Typography
              sx={{
                width: "260px",
                height: "24px",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#011A38",
                margin: "20px 0px 20px 33px",
              }}
            >
              Change role’s status
            </Typography>
          </Box>
          <Box
            className={Roles.inv_status__content}
            sx={{
              width: "450px",
              height: "87px",
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px 0px 10px 0px",
            }}
          >
            <Box
              className={Roles.inv_input}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Please enter password</label>
              <input type="text" placeholder="Password12234 " />
            </Box>
          </Box>

          {/* bottom */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "450px",
              height: "65px",
              borderTop: "3px solid #004665",
              margin: 0,
            }}
          >
            <button
              className={`${Roles.roles_cont_btn}
              ${Roles.rolesTable_close_btn}`}
              onClick={() => handleConfirmInvStatus(false)}
            >
              Cancel
            </button>
            <button
              className={`${Roles.roles_cont_btn}
              ${Roles.rolesTable_save_btn}`}
              onClick={() => handleConfirmInvStatus(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={Roles.overlay__inv_status}
        onClick={() => handleConfirmInvStatus(false)}
      />
      {/* Roles Status end */}

      {/*  */}

      {/* Roles  Delete start */}
      <Box
        className={
          openInvDelete
            ? `${Roles.confirm__inv_delete}
             ${Roles.show__inv_delete}`
            : `${Roles.confirm__inv_delete}`
        }
      >
        <Box className={Roles.inv_delete__confirm_content}>
          <Box
            className={Roles.delete_main_block}
            sx={{
              width: "450px",
              height: "65px",
              display: "flex",
              alignItems: "center",
              borderBottom: "3px solid #004665",
            }}
          >
            <Typography
              sx={{
                width: "260px",
                height: "24px",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#011A38",
                margin: "20px 0px 20px 33px",
              }}
            >
              Delete role
            </Typography>
          </Box>
          <Box
            className={Roles.inv_delete__content}
            sx={{
              width: "450px",
              height: "87px",
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px 0px 10px 0px",
            }}
          >
            <Box
              className={Roles.inv_input}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Please enter password</label>
              <input type="password" placeholder="**********" />
            </Box>
          </Box>

          {/* bottom */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "450px",
              height: "65px",
              borderTop: "3px solid #004665",
              margin: 0,
            }}
          >
            <button
              className={`${Roles.roles_cont_btn}
              ${Roles.rolesTable_close_btn}`}
              onClick={() => handleConfirmInvDelete(false)}
            >
              Cancel
            </button>
            <button
              className={`${Roles.roles_cont_btn}
              ${Roles.rolesTable_save_btn}`}
              onClick={() => handleConfirmInvDelete(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={Roles.overlay__inv_delete}
        onClick={() => handleConfirmInvDelete(false)}
      />
      {/* Roles Delete end */}

      {/* Invoice Deleted start */}

      <Box
        className={
          openDeleted
            ? `${Roles.confirm__inv_deleted}
             ${Roles.show__inv_deleted}`
            : `${Roles.confirm__inv_deleted}`
        }
      >
        <Box className={Roles.inv_deleted__confirm_content}>
          <Box
            className={Roles.deleted_main_block}
            sx={{
              width: "450px",
              height: "65px",
              display: "flex",
              alignItems: "center",
              borderBottom: "3px solid #004665",
            }}
          >
            <Typography
              sx={{
                width: "260px",
                height: "24px",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#011A38",
                margin: "20px 0px 20px 33px",
              }}
            >
              Deleted role
            </Typography>
          </Box>
          <Box
            className={Roles.inv_deleted__content}
            sx={{
              width: "450px",
              height: "87px",
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px 0px 10px 0px",
            }}
          ></Box>

          {/* bottom */}
          <Box
            // className={`${Roles.roles_bottom}`}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "450px",
              height: "65px",
              borderTop: "3px solid #004665",
              margin: 0,
            }}
          >
            <button
              className={`${Roles.roles_cont_btn} 
              ${Roles.roles_save_btn}`}
              onClick={() => handleConfirmDeleted(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={Roles.overlay__inv_deleted}
        onClick={() => handleConfirmDeleted(false)}
      />
      {/* Invoice Deleted end */}
    </>
  );
}

const RolesTable = () => {
  const [openInvEdit, setOpenInvEdit] = React.useState(false);

  const [openInvStatus, setOpenInvStatus] = React.useState(false);
  const [openInvDelete, setOpenInvDelete] = React.useState(false);
  const [openDeleted, setOpenDeleted] = React.useState(false);

  const handleConfirmInvEdit = (edit) => {
    if (edit) {
      console.log("Roles Edit");
    }
    setOpenInvEdit(false);
  };
  const handleConfirmInvStatus = (status) => {
    if (status) {
      console.log("Roles Status");
    }
    setOpenInvStatus(false);
  };

  const handleConfirmInvDelete = (result) => {
    if (result) {
      console.log("Roles Delete");
    }
    setOpenInvDelete(false);
  };
  const handleConfirmDeleted = (deleted) => {
    if (deleted) {
      console.log("Roles Deleted");
    }
    setOpenDeleted(false);
  };

  function ToggleSwitch() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleClick = () => {
      setIsToggleOn(!isToggleOn);
    };

    return (
      <div onClick={handleClick} className={Roles.ToggleSwitch}>
        <div
          className={
            isToggleOn ? `${Roles.knob} ${Roles.active}` : `${Roles.knob}`
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
            <span style={span}>Safety manager</span>
          </td>
          <td>
            <span style={span}>Checking time and vioaltions</span>
          </td>
          <td>
            <span style={span}>148</span>
          </td>
          <td>
            <span style={span}>Super admin</span>
          </td>
          <td>
            <span style={span}>Active</span>
          </td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-file-pen"
                  onClick={() => setOpenInvEdit(true)}
                ></i>
              </span>
            </Link>
            <br />
            <br />

            <ToggleSwitch />
            {/* <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-toggle-off"
                  onClick={() => setOpenInvStatus(true)}
                ></i>
              </span>
            </Link> */}
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => setOpenInvDelete(true)}
                ></i>
              </span>
            </Link>
          </td>
        </tr>
      </tbody>

      <Confirm
        openInvStatus={openInvStatus}
        handleConfirmInvStatus={handleConfirmInvStatus}
        openInvDelete={openInvDelete}
        handleConfirmInvDelete={handleConfirmInvDelete}
        openInvEdit={openInvEdit}
        handleConfirmInvEdit={handleConfirmInvEdit}
        openDeleted={openDeleted}
        handleConfirmDeleted={handleConfirmDeleted}
      />
    </>
  );
};

export default RolesTable;
