import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import Role from "../Roles/AddNewRoles.module.css";

function Confirm({ open, handleConfirm }) {
  return (
    <>
      <Box
        className={
          open
            ? `${Role.roles_confirm} ${Role.roles_show}`
            : `${Role.roles_confirm}`
        }
      >
        <Box className={Role.roles__confirm_content}>
          <Box className={Role.title}>
            <Typography>Create new role</Typography>
          </Box>
          <Box className={Role.main_box}>
            <Box className={Role.top_input}>
              <label>Role name</label>
              <input
                className={Role.role_input}
                type="text"
                placeholder="Safety manager"
              />
            </Box>
            <Typography className={Role.role_acc}>Role Access:</Typography>

            <Box className={Role.roles_access}>
              <Box className={Role.table_top_first}>
                <p>Access description</p>
                <p>1-action</p>
                <p>2-action</p>
                <p>3-action</p>
                <p>4-action</p>
              </Box>
              {/* 1 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Companies</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input className={Role.inp_check} type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>delete</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 2 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Company Subscription</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>View</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 3 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Invoices</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 4 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Super roles</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>delete</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 5 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Simple roles</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 6 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Users</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 7 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Assets</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 8 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Drivers</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Delete</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 9 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Trucks</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Delete</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 10 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Dashboard</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Delete</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 11 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Dashboard</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Delete</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
              {/* 12 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Dashboard</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Delete</p>
                  <input type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input type="checkbox" />
                </Box>
              </Box>
            </Box>
          </Box>

          {/*  */}
          <Box className={`${Role.role_bottom}`}>
            <button
              className={Role.roles__ok_btn}
              onClick={() => handleConfirm(false)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className={Role.roles_overlay}
        onClick={() => handleConfirm(false)}
      />
    </>
  );
}

const AddNewRoles = () => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = (result) => {
    if (result) {
      console.log("Add New Roles...");
    }
    setOpen(false);
  };
  return (
    <>
      <div className={Role.addNewRoles} onClick={() => setOpen(true)}>
        <button className={Role.role_add_btn}>
          <p>Add new roles +</p>
        </button>
      </div>
      <Confirm open={open} handleConfirm={handleConfirm} />
    </>
  );
};

export default AddNewRoles;
