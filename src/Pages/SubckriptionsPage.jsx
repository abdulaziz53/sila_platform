import React, { useState } from "react";
import Subckribtions from "../Components/Companies/Subckriptions/Subckribtions";
import SubckriptionsTable from "../Components/Companies/Subckriptions/SubckriptionsTable";
// import Subckribtions from "../Components/Companies/Subckriptions/Subckribtions";
// import SubckriptionsTable from "../Components/Companies/Subckriptions/SubckriptionsTable";

const tableHeaders = [
  "US DOT #",
  "Company name",
  "Phone number",
  "Start date",
  "Current active drivers",
  "Payment per driver",
  "Invoice date",
  "Status",
  "Actions",
];

const SubckriptionsPage = () => {
  // ! Filter
  let initCompanyObj = {
    us_dot: "",
    company: "",
    phone_number: "",
    start_date: "",
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
        <Subckribtions
          handleInput={handleInput}
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<SubckriptionsTable companyObj={companyObj} />}
        />
      </div>
    </div>
  );
};

export default SubckriptionsPage;
