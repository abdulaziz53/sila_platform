import React from "react";
import Drivers from "../Components/Drivers/Drivers";
import DriversTable from "../Components/Drivers/DriversTable";

const tableHeaders = [
  <input type="checkbox" />,
  "Name:",
  "Surname",
  "username",
  "Company",
  "Truck#",
  "phone number",
  "load status",
  "co-driver",
  "Status",
  "Active",
];

const DriversPage = () => {
  return (
    <div>
      <div>
        <Drivers
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<DriversTable />}
        />
      </div>
    </div>
  );
};

export default DriversPage;
