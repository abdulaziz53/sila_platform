import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AllLgs from "../AllLogs/AllLogsTable.module.css";

const AllLogsData = [
  {
    id: 1,
    name: "Alex",
    surname: "Max",
    company: "Venture Motor Freight",
    login: "AlexMax",
    phone_number: "111222333",
    email: "alexmax@email.com",
    status: "active",
    actions: {
      clock: "fa-regular fa-clock",
      switch: "fa-solid fa-toggle-off",
      download: "fa-solid fa-file-arrow-down",
    },
  },
  {
    id: 2,
    name: "Jack",
    surname: "Miller",
    company: "PepsiCo",
    login: "JackMiller",
    phone_number: "444555666",
    email: "jackmiller@email.com",
    status: "active",
    actions: {
      clock: "fa-regular fa-clock",
      switch: "fa-solid fa-toggle-off",
      download: "fa-solid fa-file-arrow-down",
    },
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

function Confirm({
  openAddLoads,
  handleConfirmAddLoads,
  openEditLoads,
  handleConfirmEditLoads,
  openDeleteLoads,
  handleConfirmDeleteLoads,
}) {
  return (
    <>
      <div></div>
    </>
  );
}

const AllLogsTable = ({ companyObj }) => {
  const [tablesData, setTablesData] = React.useState(AllLogsData);

  const [openAddLoads, setOpenAddLoads] = React.useState(false);
  const [openEditLoads, setOpenEditLoads] = React.useState(false);
  const [openDeleteLoads, setOpenDownload] = React.useState(false);

  const handleConfirmAddLoads = (OpenLoads) => {
    if (OpenLoads) {
      console.log("Open Loads");
    }
    setOpenAddLoads(false);
  };

  const handleConfirmEditLoads = (EditLoads) => {
    if (EditLoads) {
      console.log("Edit Loads...");
    }
    setOpenEditLoads(false);
  };

  const handleConfirmDeleteLoads = (DeleteLoads) => {
    if (DeleteLoads) {
      console.log("Delete Loads...");
    }
    setOpenDownload(false);
  };

  // ! filter table start
  const filterTableData = (tableDataField, searchingValue) =>
    tableDataField.toLowerCase().includes(searchingValue.toLowerCase());

  const multipleSearch = () => {
    return AllLogsData.filter((item) =>
      filterTableData(item.name, companyObj.name)
    )
      .filter((item) => filterTableData(item.surname, companyObj.surname))
      .filter((item) => filterTableData(item.login, companyObj.login))
      .filter((item) =>
        filterTableData(item.phone_number, companyObj.phone_number)
      )
      .filter((item) => filterTableData(item.email, companyObj.email));
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
      <div onClick={handleClick} className={AllLgs.ToggleSwitch}>
        <div
          className={
            isToggleOn ? `${AllLgs.knob} ${AllLgs.active}` : `${AllLgs.knob}`
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
              <span style={span}>
                <input type="checkbox" />
              </span>
            </td>
            <td>
              <span style={span}>{item.name}</span>
            </td>
            <td>
              <span style={span}>{item.surname}</span>
            </td>
            <td>
              <span style={span}>{item.company}</span>
            </td>
            <td>
              <span style={span}>{item.login}</span>
            </td>
            <td>
              <span style={span}>{item.phone_number}</span>
            </td>
            <td>
              <span style={span}>{item.email}</span>
            </td>
            <td>
              <span style={span}>{item.status}</span>
            </td>
            <td style={{ display: "flex", alignItems: "center" }}>
              <Link to="">
                <span style={{ color: "#004665", marginRight: "8px" }}>
                  <i
                    className={item.actions.clock}
                    onClick={() => setOpenAddLoads(true)}
                    // onClick={() => {
                    //   item.actionsFncClock(setOpenAddLoads(true));
                    // }}
                  ></i>
                </span>
              </Link>

              <span>
                <ToggleSwitch />
              </span>
              {/* <Link to="">
                <span style={{ color: "#004665", marginRight: "8px" }}>
                  <i
                    className={item.actions.switch}
                    onClick={() => setOpenEditLoads(true)}
                    // onClick={() => {
                    //   item.actionsFncSwitch(setOpenEditLoads(true));
                    // }}
                  ></i>
                </span>
              </Link> */}
              <Link to="">
                <span style={{ color: "#004665" }}>
                  <i
                    className={item.actions.download}
                    onClick={() => setOpenDownload(true)}
                    // onClick={() => {
                    //   item.actionsFncDownload(setOpenDownload(true));
                    // }}
                  ></i>
                </span>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>

      <Confirm
        openAddLoads={openAddLoads}
        handleConfirmAddLoads={handleConfirmAddLoads}
        openEditLoads={openEditLoads}
        handleConfirmEditLoads={handleConfirmEditLoads}
        openDeleteLoads={openDeleteLoads}
        handleConfirmDeleteLoads={handleConfirmDeleteLoads}
      />
    </>
  );
};

export default AllLogsTable;
