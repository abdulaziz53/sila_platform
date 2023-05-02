import React from "react";
import Users from "../Components/Managers/Users/Users";
import UsersTable from "../Components/Managers/Users/UsersTable";

const tableHeaders = [
  "id",
  "Name:",
  "Surname",
  "username",
  "Company",
  "Role",
  "Status",
  "Actions",
];

const UsersPage = () => {
  return (
    <div>
      <div>
        <Users
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<UsersTable />}
        />
      </div>
    </div>
  );
};

export default UsersPage;
