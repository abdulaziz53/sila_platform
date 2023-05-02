import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import AddComp from "../All_Company/AddNewCompany.module.css";

function Confirm({ open, handleConfirm }) {
  const countries = [
    { id: "1", name: "Кыргызстан" },
    { id: "2", name: "Россия" },
  ];

  const states = [
    {
      id: "1",
      countryId: "1",
      name: "Бишкек",
    },
    {
      id: "2",
      countryId: "1",
      name: "Ош",
    },
    {
      id: "3",
      countryId: "2",
      name: "Москва",
    },
    {
      id: "4",
      countryId: "2",
      name: "Санкт-Петербург",
    },
  ];

  const cities = [
    {
      id: "1",
      stateId: "1",
      name: "Первомайский район",
    },
    {
      id: "2",
      stateId: "1",
      name: "Свердловский район",
    },
    {
      id: "3",
      stateId: "2",
      name: "Ошский-район",
    },
    {
      id: "4",
      stateId: "2",
      name: "Карасуйский-район",
    },
    {
      id: "1",
      stateId: "3",
      name: "Московский район",
    },
    {
      id: "2",
      stateId: "3",
      name: "Зеленогдар",
    },
    {
      id: "3",
      stateId: "4",
      name: "Зеленогорск",
    },
    {
      id: "4",
      stateId: "4",
      name: "Ломоносов",
    },
  ];

  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setCountry(countries);
  });

  const handleCountry = (id) => {
    const dt = states.filter((x) => x.countryId === id);
    setState(dt);
  };

  const handleState = (id) => {
    const dt = cities.filter((x) => x.stateId === id);
    setCity(dt);
  };

  return (
    <>
      <Box
        className={
          open
            ? `${AddComp.confirm_all} ${AddComp.show_all}`
            : `${AddComp.confirm_all}`
        }
      >
        <Box className={AddComp.all_confirm__content}>
          {/* Top */}
          <Box className={AddComp.top_main_add}>
            <Typography>Create new invoice</Typography>
          </Box>

          {/* main content */}
          <Box className={AddComp.add_main__cont}>
            <Box className={AddComp.left_cont}>
              <Box className={AddComp.inp_box}>
                <label>Organization name:</label>
                <input type="text" placeholder="Venture Motor Freight" />
              </Box>
              <Box className={AddComp.inp_box}>
                <label>US DOT#:</label>
                <input type="text" placeholder="123456" />
              </Box>
              <Box className={AddComp.inp_box}>
                <label>Company address:</label>
                <input type="text" placeholder="Chicago IL" />
              </Box>
              <Box className={AddComp.inp_box}>
                <label>Authority #:</label>
                <input type="text" placeholder="123423435" />
              </Box>
              <Box className={AddComp.inp_box}>
                <label>MC #:</label>
                <input type="text" placeholder="4376473643" />
              </Box>
            </Box>

            {/* Right Content */}
            <Box className={AddComp.right_cont}>
              <Box className={AddComp.inp_box}>
                <label>Country:</label>
                <select
                  id="ddlCountry"
                  onChange={(e) => handleCountry(e.target.value)}
                >
                  <option value="0">Select Contry</option>
                  {country && country !== undefined
                    ? country.map((ctr, index) => {
                        return (
                          <option key={index} value={ctr.id}>
                            {ctr.name}
                          </option>
                        );
                      })
                    : "No Country"}
                </select>
              </Box>
              <Box className={AddComp.inp_box}>
                <label>State:</label>
                <select
                  id="ddlStates"
                  onChange={(e) => handleState(e.target.value)}
                >
                  <option value="0">Select States</option>
                  {state && state !== undefined
                    ? state.map((ctr, index) => {
                        return (
                          <option key={index} value={ctr.id}>
                            {ctr.name}
                          </option>
                        );
                      })
                    : "No State"}
                </select>
              </Box>
              <Box className={AddComp.inp_box}>
                <label>City:</label>
                <select id="ddlCity">
                  <option value="0">Select City</option>
                  {city && city !== undefined
                    ? city.map((ctr, index) => {
                        return (
                          <option key={index} value={ctr.id}>
                            {ctr.name}
                          </option>
                        );
                      })
                    : "No City"}
                </select>
              </Box>

              <Box className={AddComp.inp_box}>
                <label>Postal Code:</label>
                <input type="text" placeholder="Main label" />
              </Box>

              <Box className={AddComp.inp_box}>
                <label>Home Terminal Zone:</label>
                <select name="" id="">
                  <option value="">Central</option>
                </select>
              </Box>
            </Box>
          </Box>

          {/* bottom */}
          <Box className={AddComp.main_bottom}>
            <button
              className={`${AddComp.all_cont_btn} ${AddComp.all_close_btn}`}
              onClick={() => handleConfirm(false)}
            >
              close
            </button>
            <button
              className={`${AddComp.all_cont_btn} ${AddComp.all_save_btn}`}
              onClick={() => handleConfirm(true)}
            >
              save
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className={AddComp.overlay_all}
        onClick={() => handleConfirm(false)}
      />
    </>
  );
}

const AddNewCompany = () => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = (result) => {
    if (result) {
      console.log("Add New Company");
    }
    setOpen(false);
  };

  return (
    <>
      <div className={AddComp.all__add_btn}>
        <button className={AddComp.all_add_btn} onClick={() => setOpen(true)}>
          <p className={AddComp.all_add_btn__inner}>Add new company +</p>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <Confirm open={open} handleConfirm={handleConfirm} />
    </>
  );
};

export default AddNewCompany;
