import React, { useState } from "react";
import All_loadsTable from "../Components/Load_board/All_Loads/All_loadsTable";
import All_loads from "../Components/Load_board/All_Loads/All_loads";
// import All_loadsTable from "../Components/Load_board/All_loads/All_loadsTable";

const tableHeaders = [
  <input type="checkbox" />,
  "Truck #",
  "Driver",
  "Company",
  "Load status",
  "Shipping#",
  "Trailer #",
  "From",
  "To",
  "Deadline",
  "Status",
  "Comments",
  "Actions",
];

const All_loadsPage = () => {
  // ! Filter
  let initCompanyObj = {
    truck: "",
    driver: "",
    company: "",
    shipping: "",
    trailer: "",
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
        <All_loads
          handleInput={handleInput}
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<All_loadsTable companyObj={companyObj} />}
        />
      </div>
    </div>
  );
};

export default All_loadsPage;
