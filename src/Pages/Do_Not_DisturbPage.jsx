import React from "react";
import Do_Not_Disturb from "../Components/Load_board/Do_Not_Disturb/Do_Not_Disturb";
import Do_Not_DisturbTable from "../Components/Load_board/Do_Not_Disturb/Do_Not_DisturbTable";

const tableHeaders = [
  <input type="checkbox" />,
  "Truck #",
  "Driver",
  "Company",
  "Current location",
  "Comments",
  "Actions",
];

const Do_Not_DisturbPage = () => {
  return (
    <div>
      <div>
        <Do_Not_Disturb
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<Do_Not_DisturbTable />}
        />
      </div>
    </div>
  );
};

export default Do_Not_DisturbPage;
