import React, { useEffect, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";

import Violation_white from "../../../Assets/Image/All_Company-img/Violation_white.png";

import All_tb from "../All_Company/All_CompaniesTable.module.css";

import { allCmData } from "../../../data.js";

const span = {
  borderRight: "1px solid #004665",
  height: "15px",
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "12px",
  // lineHeight: "12px",
  color: "#000000",
};

function Confirm({
  open,
  openStatus,
  openDelete,
  handleConfirm,
  handleStatus,
  handleDelete,
}) {
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

  // ! Check password start
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

  // ! Check password end

  return (
    <>
      {/* ! Edit company start */}
      <Box
        className={
          open
            ? `${All_tb.confirm_edit} ${All_tb.show_edit}`
            : `${All_tb.confirm_edit}`
        }
      >
        <Box className={All_tb.all_confirm__content}>
          {/* Top */}
          <Box className={All_tb.top_main_add}>
            <Typography>Create new invoice</Typography>
          </Box>

          {/* main content */}
          <Box className={All_tb.all_edit_main__cont}>
            <Box className={All_tb.left_cont}>
              <Box className={All_tb.inp_box}>
                <label>Organization name:</label>
                <input type="text" placeholder="Venture Motor Freight" />
              </Box>
              <Box className={All_tb.inp_box}>
                <label>US DOT#:</label>
                <input type="text" placeholder="123456" />
              </Box>
              <Box className={All_tb.inp_box}>
                <label>Company address:</label>
                <input type="text" placeholder="Chicago IL" />
              </Box>
              <Box className={All_tb.inp_box}>
                <label>Authority #:</label>
                <input type="text" placeholder="123423435" />
              </Box>
              <Box className={All_tb.inp_box}>
                <label>MC #:</label>
                <input type="text" placeholder="4376473643" />
              </Box>
            </Box>

            {/* Right Content */}
            <Box className={All_tb.right_cont}>
              <Box className={All_tb.inp_box}>
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
              <Box className={All_tb.inp_box}>
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
              <Box className={All_tb.inp_box}>
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
              <Box className={All_tb.inp_box}>
                <label>Postal Code:</label>
                <input type="text" placeholder="Main label" />
              </Box>
              <Box className={All_tb.inp_box}>
                <label>Home Terminal Zone:</label>
                <select name="" id="">
                  <option value="">Central</option>
                </select>
              </Box>
            </Box>
          </Box>

          {/* bottom */}
          <Box className={All_tb.main_bottom}>
            <button
              className={`${All_tb.all_cont_btn} ${All_tb.all_close_btn}`}
              onClick={() => handleConfirm(false)}
            >
              close
            </button>
            <button
              className={`${All_tb.all_cont_btn} ${All_tb.all_save_btn}`}
              onClick={() => handleConfirm(true)}
            >
              save
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className={All_tb.overlay_edit}
        onClick={() => handleConfirm(false)}
      />
      {/* ! Edit company end */}

      {/* ! Status company start */}
      <Box
        className={
          openStatus
            ? `${All_tb.confirm_status} ${All_tb.show_status}`
            : `${All_tb.confirm_status}`
        }
      >
        <Box className={`${All_tb.status_confirm_content}`}>
          <Box className={`${All_tb.status_main_block}`}>
            <Typography>Change company status:</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box className={`${All_tb.status_content}`}>
              <Box
                className={`${All_tb.status_img}`}
                sx={{ marginBottom: "15px" }}
              >
                <img src={Violation_white} alt="" />
              </Box>
              <Box
                className={`${All_tb.status_text}`}
                sx={{ marginBottom: "19px" }}
              >
                <p>Please enter password permission: </p>
              </Box>

              <Box
                className={`${All_tb.status_input}`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label>Password:</label>

                <input
                  type="password"
                  placeholder="Password12234"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                {error && (
                  <Alert
                    sx={{ marginTop: "10px", fontSize: "14px" }}
                    size="small"
                    variant="outlined"
                    severity="error"
                  >
                    {error}
                  </Alert>
                )}
              </Box>
            </Box>

            <Box className={`${All_tb.status_bottom}`}>
              <button
                className={`${All_tb.edit_cont_btn} ${All_tb.edit_close_btn}`}
                onClick={() => handleStatus(false)}
              >
                close
              </button>
              <button
                type="submit"
                className={`${All_tb.edit_cont_btn} ${All_tb.edit_save_btn}`}
                // onClick={() => handleStatus(true)}
              >
                save
              </button>
            </Box>
          </form>
        </Box>
      </Box>

      <div
        className={`${All_tb.overlay_status}`}
        onClick={() => handleStatus(false)}
      />
      {/* ! Status company end */}

      {/* ! Delete Company start */}
      <Box
        className={
          openDelete
            ? `${All_tb.confirm_delete} ${All_tb.show_delete}`
            : `${All_tb.confirm_delete}`
        }
      >
        <Box className={`${All_tb.delete_confirm_content}`}>
          <Box className={`${All_tb.delete_main_block}`}>
            <Typography>Delete company:</Typography>
          </Box>
          <Box className={`${All_tb.delete_content}`}>
            <Box
              className={`${All_tb.delete_img}`}
              sx={{ marginBottom: "15px" }}
            >
              <img src={Violation_white} alt="" />
            </Box>
            <Box
              className={`${All_tb.delete_text}`}
              sx={{ marginBottom: "19px" }}
            >
              <p>Please enter password permission:</p>
            </Box>
            <Box className={`${All_tb.delete_input}`}>
              <label>Password:</label>
              <input type="text" placeholder="Password12234 " />
            </Box>
          </Box>

          <Box className={`${All_tb.delete_bottom}`}>
            <button
              className={`${All_tb.edit_cont_btn} ${All_tb.edit_close_btn}`}
              onClick={() => handleDelete(false)}
            >
              close
            </button>
            <button
              className={`${All_tb.edit_cont_btn} ${All_tb.edit_save_btn}`}
              onClick={() => handleDelete(true)}
            >
              save
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={`${All_tb.overlay_delete}`}
        onClick={() => handleDelete(false)}
      />
      {/* ! Delete Company end */}
    </>
  );
}

const All_CompaniesTable = ({ companyObj, displayOption }) => {
  const [tablesData, setTablesData] = React.useState(allCmData);

  const [open, setOpen] = React.useState(false);
  const [openStatus, setOpenStatus] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleConfirm = (result) => {
    if (result) {
      console.log("Edit All_Companies content...");
    }
    setOpen(false);
  };

  const handleStatus = (status) => {
    if (status) {
      console.log("Status All_Companies content...");
    }
    setOpenStatus(false);
  };

  const handleDelete = (result) => {
    if (result) {
      console.log("Delete All_Companies content...");
    }
    setOpenDelete(false);
  };

  // ! filter table start
  const filterTableData = (tableDataField, searchingValue) =>
    tableDataField.toLowerCase().includes(searchingValue.toLowerCase());

  const multipleSearch = () => {
    return allCmData
      .filter((item) => filterTableData(item.us_dot, companyObj.us_dot))
      .filter((item) =>
        filterTableData(item.company_name, companyObj.company_name)
      )
      .filter((item) => filterTableData(item.address, companyObj.address))
      .filter((item) =>
        filterTableData(item.phone_number, companyObj.phone_number)
      );
  };

  useEffect(() => {
    const filteredData = multipleSearch();
    setTablesData(filteredData);
  }, [companyObj]);
  // ! filter table end

  // ! Toggle Switch start
  function ToggleSwitch() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleClick = () => {
      setIsToggleOn(!isToggleOn);
    };

    return (
      <div onClick={handleClick} className={All_tb.ToggleSwitch}>
        <div
          className={
            isToggleOn ? `${All_tb.knob} ${All_tb.active}` : `${All_tb.knob}`
          }
        />
        {isToggleOn ? "on" : "off"}
      </div>
    );
  }
  // ! Toggle Switch end

  return (
    <>
      <tbody>
        {displayOption === "all"
          ? tablesData.map((item) => (
              <tr key={item.id}>
                <td>
                  <span style={span}>
                    <input className={item.id} type="checkbox" />
                  </span>
                </td>
                <td>
                  <span style={span}>{item.us_dot}</span>
                </td>
                <td>
                  <span style={span}>{item.company_name}</span>
                </td>
                <td>
                  <span style={span}>{item.address}</span>
                </td>
                <td>
                  <span style={span}>{item.phone_number}</span>
                </td>
                <td>
                  <span style={span}>{item.status}</span>
                </td>
                <td>
                  <span style={span}>{item.active_drivers}</span>
                </td>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#004665", marginRight: "8px" }}>
                    <i
                      className={item.actions.open}
                      onClick={() => {
                        item.actionsFncOpen(setOpen(true));
                      }}
                    ></i>
                  </span>
                  <span
                    style={{ color: "#004665", marginRight: "8px" }}
                    className={item.actions.status}
                    onClick={() => {
                      item.actionsFncSts(setOpenStatus(true));
                    }}
                  >
                    <ToggleSwitch />
                    {/* <i
                      className={item.actions.status}
                      onClick={() => {
                        item.actionsFncSts(setOpenStatus(true));
                      }}
                    ></i> */}
                  </span>
                  <span style={{ color: "#004665" }}>
                    <i
                      className={item.actions.delete}
                      onClick={() => {
                        item.actionsFncDlt(setOpenDelete(true));
                      }}
                    ></i>
                  </span>
                </td>
              </tr>
            ))
          : tablesData
              .filter((row) =>
                displayOption === "active" ? row.status : !row.status
              )
              .map((item) => (
                <tr>
                  <td>
                    <span style={span}>
                      <input className={item.id} type="checkbox" />
                    </span>
                  </td>
                  <td>
                    <span style={span}>{item.us_dot}</span>
                  </td>
                  <td>
                    <span style={span}>{item.company_name}</span>
                  </td>
                  <td>
                    <span style={span}>{item.address}</span>
                  </td>
                  <td>
                    <span style={span}>{item.phone_number}</span>
                  </td>
                  <td>
                    <span style={span}>{item.status}</span>
                  </td>
                  <td>
                    <span style={span}>{item.active_drivers}</span>
                  </td>
                  <td style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ color: "#004665", marginRight: "8px" }}>
                      <i
                        className={item.actions.open}
                        onClick={() => {
                          item.actionsFncOpen(setOpen(true));
                        }}
                      ></i>
                    </span>
                    <span
                      style={{ color: "#004665", marginRight: "8px" }}
                      // className={item.actions.status}
                      // onClick={() => {
                      //   item.actionsFncSts(setOpenStatus(true));
                      // }}
                    >
                      <ToggleSwitch
                        className={item.actions.status}
                        onClick={() => {
                          item.actionsFncSts(setOpenStatus(true));
                        }}
                      />
                      {/* <i
                        className={item.actions.status}
                        onClick={() => {
                          item.actionsFncSts(setOpenStatus(true));
                        }}
                      ></i> */}
                    </span>
                    <span style={{ color: "#004665" }}>
                      <i
                        className={item.actions.delete}
                        onClick={() => {
                          item.actionsFncDlt(setOpenDelete(true));
                        }}
                      ></i>
                    </span>
                  </td>
                </tr>
              ))}
      </tbody>

      <Confirm
        open={open}
        handleConfirm={handleConfirm}
        openStatus={openStatus}
        handleStatus={handleStatus}
        openDelete={openDelete}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default All_CompaniesTable;
