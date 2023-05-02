import React from "react";
import { Route, Routes } from "react-router-dom";

// import AddNewCompany from "./Components/Companies/All_Company/AddNewCompany";
import All_Companies from "./Components/Companies/All_Company/All_Companies";
import AddNewRoles from "./Components/Managers/Roles/AddNewRoles";
import All_CompaniesPage from "./Pages/All_CompaniesPage";
import AssetsPage from "./Pages/AssetsPage";
import CompaniesPage from "./Pages/CompaniesPage";
import RolesPage from "./Pages/RolesPage";
import SubckriptionsPage from "./Pages/SubckriptionsPage";
import UsersPage from "./Pages/UsersPage";
import TruckPage from "./Pages/TruckPage";
import AddNewTruck from "./Components/Truck/AddNewTruck";
import DriversPage from "./Pages/DriversPage";
import Load_boardPage from "./Pages/Load_boardPage";
import Do_Not_DisturbPage from "./Pages/Do_Not_DisturbPage";
import All_loadsPage from "./Pages/All_loadsPage";
import Waiting_For_The_LoadsPage from "./Pages/Waiting_For_The_LoadsPage";
import SuperLogsPage from "./Pages/SuperLogsPage";
import AllLogsPage from "./Pages/AllLogsPage";
import ViolationsPage from "./Pages/ViolationsPage";
import InspectedDriversPage from "./Pages/InspectedDriversPage";
import IFTA_ReportsPage from "./Pages/IFTA_ReportsPage";
import TransactionsPage from "./Pages/TransactionsPage";
// import HomePage from "./Pages/MainHomePage/HomePage";
// import NotFoundPage from "./Pages/NotFoundPage";
import ManagersPage from "./Pages/ManagersPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        {/* Home Page start */}
        {/* <Route path="/home" element={<HomePage />} /> */}
        {/* Home Page end */}

        {/* Companies Page start */}
        <Route
          path="/companies"
          element={<CompaniesPage /> && <All_Companies />}
        />

        <Route path="/all_companies" element={<All_CompaniesPage />} />
        {/* <Route
          path="/all_companies:/addnewcompany"
          element={<AddNewCompany />}
        /> */}

        <Route path="/subckribtions" element={<SubckriptionsPage />} />

        {/* Companies Page end */}

        {/* Managers Page start */}

        <Route path="/managers" element={<ManagersPage />} />

        {/* Roles Page start */}
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/roles:/addnewroles" element={<AddNewRoles />} />
        {/* Roles Page end */}

        {/* Managers Page end */}

        {/* Users Page start */}
        <Route path="/users" element={<UsersPage />} />
        {/* Users Page end */}

        {/* Assets Page start */}
        <Route path="/assets" element={<AssetsPage />} />
        {/* Assets Page end */}

        {/* Truck Page start */}
        <Route path="/truck" element={<TruckPage />} />
        <Route path="/truck:/addnewtruck" element={<AddNewTruck />} />
        {/* Truck Page end */}

        {/* Drivers Page start */}
        <Route path="/drivers" element={<DriversPage />} />
        {/* Drivers Page end */}

        {/* Load Boards Page start */}
        <Route path="/load_board" element={<Load_boardPage />} />

        <Route
          path="/all_loads"
          element={<Load_boardPage /> && <All_loadsPage />}
        />

        <Route path="/do-not-disturb" element={<Do_Not_DisturbPage />} />

        <Route
          path="/waiting-fot-the-loads"
          element={<Waiting_For_The_LoadsPage />}
        />
        {/* Load Boards Page end */}

        {/* Super Logs Page start */}
        <Route
          path="/super-logs:/all_logs"
          element={<SuperLogsPage /> && <AllLogsPage />}
        />

        <Route path="/all_logs" element={<AllLogsPage />} />

        <Route path="/violations" element={<ViolationsPage />} />

        <Route path="/inspected_drivers" element={<InspectedDriversPage />} />
        {/* Super Logs Page end */}

        {/* IFTA_Reports start */}
        <Route path="/ifta-reports" element={<IFTA_ReportsPage />} />
        {/* IFTA_Reports end */}

        {/* Transactions start */}
        <Route path="/transactions" element={<TransactionsPage />} />
        {/* Transactions end */}

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
};

export default MainRoutes;
