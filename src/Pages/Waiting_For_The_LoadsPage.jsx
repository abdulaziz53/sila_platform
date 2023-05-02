import React, { useState } from "react";
import Waiting_For_The_Load from "../Components/Load_board/Waiting_For_The_Load/Waiting_For_The_Load";
import Waiting_For_The_LoadTable from "../Components/Load_board/Waiting_For_The_Load/Waiting_For_The_LoadTable";

const tableHeaders = [
  <input type="checkbox" />,
  "Truck #",
  "Driver",
  "Company",
  "Current location",
  "Comments",
  "Waiting for",
  "HOS",
  "Actions",
];

const Waiting_For_The_LoadsPage = () => {
  // ! Filter
  let initCompanyObj = {
    truck: "",
    driver: "",
    company: "",
    current_location: "",
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
        <Waiting_For_The_Load
          handleInput={handleInput}
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<Waiting_For_The_LoadTable companyObj={companyObj} />}
        />
      </div>
    </div>
  );
};

export default Waiting_For_The_LoadsPage;
