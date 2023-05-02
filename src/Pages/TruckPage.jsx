import React from "react";
import Truck from "../Components/Truck/Truck";
import TruckTable from "../Components/Truck/TruckTable";

const tableHeaders = [
  <input type="checkbox" />,
  "Truck#",
  "VIN",
  "License Plate",
  "Driver",
  "Model",
  "Company name",
  "ELOG serial",
  "PT30 numbers",
  "Status",
  "Active",
];

const TruckPage = () => {
  return (
    <div>
      {" "}
      <div>
        <Truck
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<TruckTable />}
        />
      </div>{" "}
    </div>
  );
};

export default TruckPage;
