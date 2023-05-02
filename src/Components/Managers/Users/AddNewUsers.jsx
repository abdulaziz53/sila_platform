import { Box, Typography } from "@mui/material";
import React from "react";

import Us from "./AddNewUsers.module.css";

function Confirm({ open, handleConfirm }) {
  return (
    <>
      <div>
        <Box
          className={
            open
              ? `${Us.users_confirm} ${Us.users_show}`
              : `${Us.users_confirm}`
          }
        >
          <Box className={Us.users_confirm_content}>
            {/* top */}
            <Box className={Us.add_users_title}>
              <Typography>Add new user:</Typography>
            </Box>

            {/* main */}
            <Box className={Us.us_main_box}>
              <Box className={`${Us.us_input} ${Us.us_input_top}`}>
                <Box className={Us.us_inp_cont}>
                  <label>Please enter name:</label>
                  <input type="text" placeholder="name" />
                </Box>
                <Box className={Us.us_inp_cont}>
                  <label>Please enter surname:</label>
                  <input type="text" placeholder="surname" />
                </Box>
              </Box>
              <Box className={Us.us_input}>
                <Box className={Us.us_inp_cont}>
                  <label>Please enter email:</label>
                  <input type="text" placeholder="email" />
                </Box>
                <Box className={Us.us_inp_cont}>
                  <label>Please enter Phone number:</label>
                  <input type="text" placeholder="number" />
                </Box>
              </Box>

              <Box className={Us.us_cont_password}>
                <input type="text" placeholder="Please enter password" />
                <i className="fa-solid fa-eye"></i>

                <input type="text" placeholder="Confirm password" />
                <i className="fa-solid fa-eye"></i>
              </Box>

              <Box className={Us.select_cont}>
                <label>Please choose company :</label>
                <select name="" id="">
                  <option value="">Choose Company</option>
                  <option value="">Venture Motor Freight LLC</option>
                </select>
              </Box>
              <Box className={Us.select_cont}>
                <label>Please choose simple role :</label>
                <select name="" id="">
                  <option value="">Choose simple role</option>
                  <option value="">Monitorting manager</option>
                </select>
              </Box>
            </Box>

            {/* bottom */}
            <Box className={Us.us_btm}>
              <button
                className={`${Us.us_btn} ${Us.us_close_btn}`}
                onClick={() => handleConfirm(false)}
              >
                Cansel
              </button>
              <button
                className={`${Us.us_btn} ${Us.us_save_btn}`}
                onClick={() => handleConfirm(true)}
              >
                Save
              </button>
            </Box>
          </Box>
        </Box>
        <div
          className={Us.users_overlay}
          onClick={() => handleConfirm(false)}
        />
      </div>
    </>
  );
}

const AddNewUsers = () => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = (result) => {
    if (result) {
      console.log("Users add");
    }
    setOpen(false);
  };
  return (
    <>
      <div className={Us.users_add_btn_box}>
        <button className={Us.users_add_btn} onClick={() => setOpen(true)}>
          <p className={Us.add_btn}>
            Add new user <i className="fa-solid fa-plus"></i>
          </p>

          <p className={Us.adt_add_btn}>
            Add <i className="fa-solid fa-plus"></i>
          </p>
        </button>
      </div>

      <Confirm open={open} handleConfirm={handleConfirm} />
    </>
  );
};

export default AddNewUsers;
