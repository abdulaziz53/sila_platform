import React from "react";
import Transactions from "../Components/SuperLogs/Transactions/Transactions";
import TransactionsTable from "../Components/SuperLogs/Transactions/TransactionsTable";

const tableHeaders = [
  <input type="checkbox" />,
  "Company name",
  "User name",
  "Driver",
  "Truck #",
  "Status",
  "Comments",
  "Actions",
];

const TransactionsPage = () => {
  return (
    <div>
      <div>
        <Transactions
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<TransactionsTable />}
        />
      </div>
    </div>
  );
};

export default TransactionsPage;
