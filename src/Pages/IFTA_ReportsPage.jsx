import React from "react";
import IFTA_Reports from "../Components/IFTA_Reports/IFTA_Reports";
import IFTA_ReportsTable from "../Components/IFTA_Reports/IFTA_ReportsTable";

const tableHeaders = [
  <input type="checkbox" />,
  "Name:",
  "Surname",
  "username",
  "Company",
  "Truck#",
  "phone number",
  "co-driver",
  "Status",
  "Active",
];

const IFTA_ReportsPage = () => {
  return (
    <div>
      <div>
        <IFTA_Reports
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<IFTA_ReportsTable />}
        />
      </div>
    </div>
  );
};

export default IFTA_ReportsPage;
