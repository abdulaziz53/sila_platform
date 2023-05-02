import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const ViolData = [
  {
    id: 1,
    name: "Alex",
    surname: "Max",
    company: "Venture Motor Freight",
    phone_number: "666 666 666",
    email: "alexmax@email.com",
    violation_type: "4h shift limit violation",
  },
  {
    id: 2,
    name: "Bob",
    surname: "Jones",
    company: "Tesla",
    phone_number: "777 555 666",
    email: "bobjones@email.com",
    violation_type: "4h shift limit violation",
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

const ViolationsTable = ({ companyObj }) => {
  const [tablesData, setTablesData] = React.useState(ViolData);

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

  // ! filter table start
  const filterTableData = (tableDataField, searchingValue) =>
    tableDataField.toLowerCase().includes(searchingValue.toLowerCase());

  const multipleSearch = () => {
    return ViolData.filter((item) =>
      filterTableData(item.name, companyObj.name)
    ).filter((item) => filterTableData(item.surname, companyObj.surname));
  };

  useEffect(() => {
    const filteredData = multipleSearch();
    setTablesData(filteredData);
  }, [companyObj]);
  // ! filter table end

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
              <span style={span}>{item.phone_number}</span>
            </td>
            <td>
              <span style={span}>{item.email}</span>
            </td>
            <td>
              <span style={span}>{item.violation_type}</span>
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

export default ViolationsTable;
