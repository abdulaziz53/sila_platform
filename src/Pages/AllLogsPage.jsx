import React, { useState } from "react";
import AllLogs from "../Components/SuperLogs/AllLogs/AllLogs";
import AllLogsTable from "../Components/SuperLogs/AllLogs/AllLogsTable";

const tableHeaders = [
  <input type="checkbox" />,
  "Name",
  "Surname",
  "Company",
  "login:",
  "Phone number",
  "email",
  "Status",
  "Actions",
];
const AllLogsPage = () => {
  // ! Filter
  let initCompanyObj = {
    name: "",
    surname: "",
    login: "",
    phone_number: "",
    email: "",
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
        <AllLogs
          handleInput={handleInput}
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<AllLogsTable companyObj={companyObj} />}
        />
      </div>
    </div>
  );
};

export default AllLogsPage;
