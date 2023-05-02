import React, { useState } from "react";
import InspectedDrivers from "../Components/SuperLogs/InspectedDrivers/InspectedDrivers";
import InspectedDriversTable from "../Components/SuperLogs/InspectedDrivers/InspectedDriversTable";

const tableHeaders = [
  <input type="checkbox" />,
  "Name",
  "Surname",
  "Company name",
  "location",
  "inspected date",
];

const ViolationsPage = () => {
  // ! Filter
  let initCompanyObj = {
    name: "",
    surname: "",
  };

  const [companyObj, setComponyObj] = useState(initCompanyObj);

  const handleInput = (e) => {
    let newObj = {
      ...companyObj,
      [e.target.name]: e.target.value,
    };
    setComponyObj(newObj);
  };

  return (
    <div>
      <div>
        <InspectedDrivers
          handleInput={handleInput}
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<InspectedDriversTable companyObj={companyObj} />}
        />
      </div>
    </div>
  );
};

export default ViolationsPage;
