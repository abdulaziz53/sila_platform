import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const inspectData = [
  {
    id: 1,
    name: "Alex",
    surname: "Max",
    company: "Venture Motor Freight",
    location: "Chicago IL",
    inspected_date: "23/03/2022",
  },
  {
    id: 2,
    name: "Jhon",
    surname: "Max",
    company: "Fanta",
    location: "Washington",
    inspected_date: "23/03/2022",
  },
];

const span = {
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

const InspectedDriversTable = ({ companyObj }) => {
  const [tablesData, setTablesData] = React.useState(inspectData);

  const [openAddLoads, setOpenAddLoads] = React.useState(false);
  const [openEditLoads, setOpenEditLoads] = React.useState(false);
  const [openDeleteLoads, setOpenDeleteLoads] = React.useState(false);

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
    setOpenDeleteLoads(false);
  };

  const filterTableData = (tableDataField, searchingValue) =>
    tableDataField.toLowerCase().includes(searchingValue.toLowerCase());

  const multipleSearch = () => {
    return inspectData
      .filter((item) => filterTableData(item.name, companyObj.name))
      .filter((item) => filterTableData(item.surname, companyObj.surname));
  };

  useEffect(() => {
    const filteredData = multipleSearch();
    setTablesData(filteredData);
  }, [companyObj]);

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
              <span style={span}>{item.location}</span>
            </td>
            <td>
              <span style={span}>{item.inspected_date}</span>
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

export default InspectedDriversTable;
