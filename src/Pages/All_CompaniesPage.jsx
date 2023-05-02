import React, { useState } from "react";
import All_Companies from "../Components/Companies/All_Company/All_Companies";
import All_CompaniesTable from "../Components/Companies/All_Company/All_CompaniesTable";

const tableHeaders = [
  <input type="checkbox" />,
  "US DOT #",
  "Company name",
  "Company address",
  "Phone number",
  "Status",
  "Active drivers",
  "Actions",
];

const All_CompaniesPage = () => {
  // ! Filter
  let initCompanyObj = {
    us_dot: "",
    company_name: "",
    address: "",
    phone_number: "",
  };

  const [companyObj, setComponyObj] = useState(initCompanyObj);

  const handleInput = (e) => {
    let newObj = {
      ...companyObj,
      [e.target.name]: e.target.value,
    };
    setComponyObj(newObj);
  };

  // ! Checkbox

  // ! select choose "Active", "Inactive", or "All"
  const [displayOption, setDisplayOption] = useState("all");

  const handleOptionChange = (event) => {
    setDisplayOption(event.target.value);
    console.log(setDisplayOption);
  };

  return (
    <div>
      <div>
        <All_Companies
          handleInput={handleInput}
          //
          headers={tableHeaders}
          minCellWidth={120}
          //
          displayOption={displayOption}
          handleOptionChange={handleOptionChange}
          //
          tableContent={
            <All_CompaniesTable
              companyObj={companyObj}
              //
              displayOption={displayOption}
            />
          }
        />
      </div>
    </div>
  );
};

export default All_CompaniesPage;
