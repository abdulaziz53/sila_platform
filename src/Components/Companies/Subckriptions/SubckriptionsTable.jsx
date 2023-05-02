import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import SubcTb from "../Subckriptions/SubckriptionsTable.module.css";
// import { subData } from "../../../data.js";
// import { subData } from "../../../data.js";

const subData = [
  {
    id: "1",
    us_dot: "12345",
    company: "SSB",
    phone_number: "665 555 555 555",
    start_date: "23.03.2022",
    current_active_drivers: "125",
    payment_per_driver: "90",
    invoice_date: "23.03.2022",
    status: "active",
    actions: "",
  },
  {
    id: "2",
    us_dot: "123456",
    company: "SILA",
    phone_number: "777 777 777",
    start_date: "23.03.2022",
    current_active_drivers: "125",
    payment_per_driver: "90",
    invoice_date: "23.03.2022",
    status: "active",
    actions: "",
  },
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

function Confirm({ openSubInf, handleConfirmSubInf }) {
  return (
    <>
      {/* ! Edit company start */}
      <Box
        className={
          openSubInf
            ? `${SubcTb.confirm_sub_inf} ${SubcTb.show_sub_inf}`
            : `${SubcTb.confirm_sub_inf}`
        }
      >
        <Box className={`${SubcTb.sub_inf__confirm_content}`}>
          <Box className={`${SubcTb.sub_inf_title}`}>
            <Typography>Company subscription information</Typography>
          </Box>

          <Box className={`${SubcTb.sub_inf__main_block}`}>
            <Box className={`${SubcTb.sub_inf__main_inf}`}>
              {/* Left Box */}
              <Box className={`${SubcTb.sub_inf__left_cont}`}>
                <label>Company name:</label>
                <Typography>Venture Motor Freight LLC</Typography>
                <label>Company address:</label>
                <Typography>Chicago IL</Typography>
                <label>Company phone number :</label>
                <Typography>6543219874</Typography>
                <label>Company email address :</label>
                <Typography>vmfsafety@gmail.com</Typography>
                <label>Company start date :</label>
                <Typography>23.02.2022</Typography>
              </Box>

              {/* Right Box */}
              <Box className={`${SubcTb.sub_inf__right_cont}`}>
                <label>Company’s last subscription date:</label>
                <Typography>21.03.2022</Typography>
                <label>Company’s payment per driver:</label>
                <Typography>80$</Typography>
                <label>Company’s currennt active driver:</label>
                <Typography>125</Typography>
                <label>Company’s currennt status:</label>
                <Typography>active</Typography>
                <button>View company history</button>
              </Box>

              <Box className={`${SubcTb.sub_invoice_inf}`}>
                <Typography>Unpaid invoices </Typography>
                <Box className={`${SubcTb.sub_unpaid__invoices}`}>
                  <span>123456</span>
                  <span>2000.00</span>
                  <span>23.03.2022</span>
                  <Box className={`${SubcTb.sub_unpaid__invoices_btn}`}>
                    <button>Paid</button>
                    <button>Post</button>
                  </Box>
                </Box>
              </Box>

              <Box className={`${SubcTb.sub_inf_inp}`}>
                <label>SUM:</label>
                <input type="text" placeholder="2000.00$" />
              </Box>
            </Box>
          </Box>

          <Box className={`${SubcTb.subc_tb_bottom}`}>
            <button
              className={`${SubcTb.edit_cont_btn} ${SubcTb.edit_close_btn}`}
              onClick={() => handleConfirmSubInf(false)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className={`${SubcTb.overlay_sub_inf}`}
        onClick={() => handleConfirmSubInf(false)}
      />
    </>
  );
}

const SubckriptionsTable = ({ companyObj }) => {
  const [tablesData, setTablesData] = React.useState(subData);

  const [openSubInf, setOpenSubInf] = React.useState(false);

  const handleConfirmSubInf = (result) => {
    if (result) {
      console.log("some action...");
    }
    setOpenSubInf(false);
  };

  // ! filter table start
  const filterTableData = (tableDataField, searchingValue) =>
    tableDataField.toLowerCase().includes(searchingValue.toLowerCase());

  const multipleSearch = () => {
    return subData
      .filter((item) => filterTableData(item.us_dot, companyObj.us_dot))
      .filter((item) => filterTableData(item.company, companyObj.company))
      .filter((item) =>
        filterTableData(item.phone_number, companyObj.phone_number)
      )
      .filter((item) =>
        filterTableData(item.start_date, companyObj.start_date)
      );
  };

  useEffect(() => {
    const filteredData = multipleSearch();
    setTablesData(filteredData);
  }, [companyObj]);
  // ! filter table end

  function ToggleSwitch() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleClick = () => {
      setIsToggleOn(!isToggleOn);
    };

    return (
      <div onClick={handleClick} className={SubcTb.ToggleSwitch}>
        <div
          className={
            isToggleOn ? `${SubcTb.knob} ${SubcTb.active}` : `${SubcTb.knob}`
          }
        />
        {isToggleOn ? "on" : "off"}
      </div>
    );
  }

  return (
    <>
      <tbody>
        {tablesData.map((item) => (
          <tr key={item.id}>
            <td>
              <span style={span}>{item.us_dot}</span>
            </td>
            <td>
              <span style={span}>{item.company}</span>
            </td>
            <td>
              <span style={span}>{item.phone_number}</span>
            </td>
            <td>
              <span style={span}>{item.start_date}</span>
            </td>
            <td>
              <span style={span}>{item.current_active_drivers}</span>
            </td>
            <td>
              <span style={span}>{item.payment_per_driver}</span>
            </td>
            <td>
              <span style={span}>{item.invoice_date}</span>
            </td>
            <td>
              <span style={span}>{item.status}</span>
            </td>
            <td style={{ display: "flex", alignItems: "center" }}>
              <ToggleSwitch
                className={item.actions}
                // onClick={() => {
                //   item.actions(setOpenSubInf(true));
                // }}
              />
            </td>
          </tr>
        ))}
      </tbody>

      <Confirm
        openSubInf={openSubInf}
        handleConfirmSubInf={handleConfirmSubInf}
      />
    </>
  );
};

export default SubckriptionsTable;
