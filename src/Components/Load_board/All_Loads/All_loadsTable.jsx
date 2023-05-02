import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

import LoadGraph from "../../../Assets/Image/Load_graph.png";

import LoadsTb from "./All_LoadsTable.module.css";

const AllLData = [
  {
    id: 1,
    truck: "1001A",
    driver: "Alex Max",
    company: "Venture motor freight",
    load_status: "loa",
    shipping: "1838499500",
    trailer: "123456y",
    from: "Portland OR",
    to: "Chicago IL",
    deadline: "10.11.2022 22:30",
    status: "late",
    comments: "JB Hunt load URGENT",
    actions: "1",
  },
  {
    id: 2,
    truck: "2001A",
    driver: "jhon",
    company: "BMW",
    load_status: "ok",
    shipping: "123245678",
    trailer: "113456y",
    from: "Portland OR",
    to: "Chicago IL",
    deadline: "10.11.2022 22:30",
    status: "late",
    comments: "JB Hunt load URGENT",
    actions: "1",
  },
];

const span = {
  height: "15px",
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "12px",
  color: "#000000",
};

function Confirm({
  openAddLoads,
  handleConfirmAddLoads,
  openEditLoads,
  handleConfirmEditLoads,
  openDeleteLoads,
  handleConfirmDeleteLoads,
}) {
  return (
    <>
      {/* Open Load start */}
      <Box
        className={
          openAddLoads
            ? `${LoadsTb.addLoads_confirm} ${LoadsTb.addLoads_show}`
            : `${LoadsTb.addLoads_confirm}`
        }
      >
        <Box className={LoadsTb.addLoads_confirm_content}>
          {/* add top */}
          <Box className={LoadsTb.add_loads_title}>
            <Typography>Truck load information</Typography>
          </Box>

          {/* main start */}
          <Box className={LoadsTb.addLd_add__main_box}>
            {/* 1 box */}
            <Box className={LoadsTb.addLd_main_box_inner}>
              {/* 1 box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_con}>
                <label>Company name:</label>
                <input type="text" placeholder="Venture Motor Freight LLC " />
              </Box>
              {/* 1 box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_con}>
                <label>Truck#:</label>
                <input type="text" placeholder="1001A" />
              </Box>
              {/* 1 box - 3 */}
              <Box className={LoadsTb.addLd_main_box_inner_con}>
                <label>Driver name:</label>
                <input type="text" placeholder="Alex Max" />
              </Box>
            </Box>

            {/* 2 box */}
            <Box className={LoadsTb.addLd_main_box_inner}>
              {/* 2box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont}>
                <label>Trailer#:</label>
                <input type="text" placeholder="V4512656845" />
              </Box>
              {/* 2box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont}>
                <label>Shipping document:</label>
                <input type="text" placeholder="45641321548" />
              </Box>
            </Box>

            {/* 3 box */}
            <Box className={LoadsTb.addLd_main_box_inner}>
              {/* 3box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont}>
                <label>From :</label>
                <input type="text" placeholder="Portland OR" />
              </Box>
              {/* 3box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont}>
                <label>To :</label>
                <input type="text" placeholder="Chicago IL" />
              </Box>
            </Box>

            {/* 4 box Load graph */}
            <Box>
              <Box>
                <img src={LoadGraph} alt="" />
              </Box>
            </Box>

            {/* 5box */}
            <Box className={LoadsTb.addLd_main_box_inner}>
              {/* 5box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont5box_1}>
                <label>Comments</label>
                <input type="text" placeholder="2313564584610" id="" name="" />
              </Box>
              {/* 5box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont5box_2}>
                <label>Deadline</label>
                <input
                  type="text"
                  placeholder="06.11.2022 22:16"
                  id=""
                  name=""
                />
              </Box>
            </Box>

            {/* 6box */}
            <Box className={LoadsTb.addLd_main_box_inner_clock}>
              {/* 6box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_clock_1}>
                <Typography>04:26</Typography>
                <label>break time</label>
              </Box>

              {/* 6box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_clock_1}>
                <Typography>08:41</Typography>
                <label>driving time</label>
              </Box>

              {/* 6box - 3 */}
              <Box className={LoadsTb.addLd_main_box_inner_clock_1}>
                <Typography>11:08</Typography>
                <label>14h shift time</label>
              </Box>

              {/* 6box - 4 */}
              <Box className={LoadsTb.addLd_main_box_inner_clock_1}>
                <Typography>41:08</Typography>
                <label>Cycle time</label>
              </Box>
            </Box>

            {/* 7box */}
            <Box className={LoadsTb.bottom_cont}>
              <label>Current load status</label>
              <input type="text" placeholder="Warnning" />
            </Box>
          </Box>
          {/* main end */}

          {/* add bottom start */}
          <Box className={LoadsTb.add_loads_btm}>
            <button
              className={`${LoadsTb.loads_btn} ${LoadsTb.loads_close_btn}`}
              onClick={() => handleConfirmAddLoads(false)}
            >
              Cansel
            </button>
            <button
              className={`${LoadsTb.loads_btn} ${LoadsTb.loads_save_btn}`}
              onClick={() => handleConfirmAddLoads(true)}
            >
              Save
            </button>
          </Box>
          {/* add bottom end */}
        </Box>
      </Box>
      <div
        className={LoadsTb.addLoads_overlay}
        onClick={() => handleConfirmAddLoads(false)}
      />
      {/* Open Load end */}

      {/*  */}

      {/* Open Edit Load start */}
      <Box
        className={
          openEditLoads
            ? `${LoadsTb.addLoads_confirm} ${LoadsTb.addLoads_show}`
            : `${LoadsTb.addLoads_confirm}`
        }
      >
        <Box className={LoadsTb.addLoads_confirm_content}>
          {/* add top */}
          <Box className={LoadsTb.add_loads_title}>
            <Typography>Truck load information</Typography>
          </Box>

          {/* main start */}
          <Box className={LoadsTb.addLd_add__main_box}>
            {/* 1 box */}
            <Box className={LoadsTb.addLd_main_box_inner}>
              {/* 1 box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_con}>
                <label>Company name:</label>
                <input
                  className={LoadsTb.edit_inp}
                  type="text"
                  placeholder="Venture Motor Freight LLC "
                />
              </Box>
              {/* 1 box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_con}>
                <label>Truck#:</label>
                <input
                  className={LoadsTb.edit_inp}
                  type="text"
                  placeholder="1001A"
                />
              </Box>
              {/* 1 box - 3 */}
              <Box className={LoadsTb.addLd_main_box_inner_con}>
                <label>Driver name:</label>
                <input
                  className={LoadsTb.edit_inp}
                  type="text"
                  placeholder="Alex Max"
                />
              </Box>
            </Box>

            {/* 2 box */}
            <Box className={LoadsTb.addLd_main_box_inner}>
              {/* 2box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont}>
                <label>Trailer#:</label>
                <input
                  className={LoadsTb.edit_inp}
                  type="text"
                  placeholder="V4512656845"
                />
              </Box>
              {/* 2box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont}>
                <label>Shipping document:</label>
                <input
                  className={LoadsTb.edit_inp}
                  type="text"
                  placeholder="45641321548"
                />
              </Box>
            </Box>

            {/* 3 box */}
            <Box className={LoadsTb.addLd_main_box_inner}>
              {/* 3box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont}>
                <label>From :</label>
                <input
                  className={LoadsTb.edit_inp}
                  type="text"
                  placeholder="Portland OR"
                />
              </Box>
              {/* 3box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont}>
                <label>To :</label>
                <input
                  className={LoadsTb.edit_inp}
                  type="text"
                  placeholder="Chicago IL"
                />
              </Box>
            </Box>

            {/* 4 box Load graph */}
            <Box>
              <Box>
                <img src={LoadGraph} alt="" />
              </Box>
            </Box>

            {/* 5box */}
            <Box className={LoadsTb.addLd_main_box_inner}>
              {/* 5box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont5box_1}>
                <label>Comments</label>
                <input
                  className={LoadsTb.edit_inp}
                  type="text"
                  placeholder="2313564584610"
                  id=""
                  name=""
                />
              </Box>
              {/* 5box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_cont5box_2}>
                <label>Deadline</label>
                <input
                  className={LoadsTb.edit_inp}
                  type="text"
                  placeholder="06.11.2022 22:16"
                  id=""
                  name=""
                />
              </Box>
            </Box>

            {/* 6box */}
            <Box className={LoadsTb.addLd_main_box_inner_clock}>
              {/* 6box - 1 */}
              <Box className={LoadsTb.addLd_main_box_inner_clock_1}>
                <Typography>04:26</Typography>
                <label>break time</label>
              </Box>

              {/* 6box - 2 */}
              <Box className={LoadsTb.addLd_main_box_inner_clock_1}>
                <Typography>08:41</Typography>
                <label>driving time</label>
              </Box>

              {/* 6box - 3 */}
              <Box className={LoadsTb.addLd_main_box_inner_clock_1}>
                <Typography>11:08</Typography>
                <label>14h shift time</label>
              </Box>

              {/* 6box - 4 */}
              <Box className={LoadsTb.addLd_main_box_inner_clock_1}>
                <Typography>41:08</Typography>
                <label>Cycle time</label>
              </Box>
            </Box>

            {/* 7box */}
            <Box className={LoadsTb.bottom_cont}>
              <label>Current load status</label>
              <input
                className={LoadsTb.edit_inp}
                type="text"
                placeholder="Warnning"
              />
            </Box>
          </Box>
          {/* main end */}

          {/* add bottom start */}
          <Box className={LoadsTb.add_loads_btm}>
            <button
              className={`${LoadsTb.loads_btn} ${LoadsTb.loads_close_btn}`}
              onClick={() => handleConfirmEditLoads(false)}
            >
              Cansel
            </button>
            <button
              className={`${LoadsTb.loads_btn} ${LoadsTb.loads_save_btn}`}
              onClick={() => handleConfirmEditLoads(true)}
            >
              Save
            </button>
          </Box>
          {/* add bottom end */}
        </Box>
      </Box>
      <div
        className={LoadsTb.addLoads_overlay}
        onClick={() => handleConfirmEditLoads(false)}
      />
      {/* Open Edit Loads end */}

      {/*  */}

      {/* Truck Delete Dialig Window start */}
      <Box
        className={
          openDeleteLoads
            ? `${LoadsTb.loads_delete__confirm} ${LoadsTb.loads_show}`
            : `${LoadsTb.loads_delete__confirm}`
        }
      >
        <Box className={LoadsTb.loads_delete__confirm_content}>
          {/* Top */}
          <Box className={LoadsTb.delete_loads_title}>
            <Typography>Delete load information</Typography>
          </Box>
          {/* Main box start */}
          <Box className={LoadsTb.loads_delete__content}>
            <Box className={LoadsTb.delete_cont_inner}>
              <label>Please write reasons why load is cancelled</label>
              <input type="text" placeholder="Trcuk is broken" />
            </Box>
          </Box>
          {/* Main box end */}

          {/* bottom */}
          <Box className={LoadsTb.loads_delete_btm}>
            <button
              className={`${LoadsTb.loads_btn} ${LoadsTb.loads_close_btn}`}
              onClick={() => handleConfirmDeleteLoads(false)}
            >
              Cancel
            </button>
            <button
              className={`${LoadsTb.loads_btn} ${LoadsTb.loads_save_btn}`}
              onClick={() => handleConfirmDeleteLoads(true)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>

      <div
        className={LoadsTb.loads_delete__overlay}
        onClick={() => handleConfirmDeleteLoads(false)}
      />
      {/* Truck Delete Dialig Window end */}
    </>
  );
}

const All_loadsTable = ({ companyObj }) => {
  const [tablesData, setTablesData] = React.useState(AllLData);

  const [openAddLoads, setOpenAddLoads] = React.useState(false);
  const [openEditLoads, setOpenEditLoads] = React.useState(false);
  const [openDeleteLoads, setOpenDeleteLoads] = React.useState(false);

  const handleConfirmAddLoads = (OpenLoads) => {
    if (OpenLoads) {
      console.log("Open Loads");
    }
    setOpenAddLoads(false);
  };

  const handleConfirmEditLoads = (EditLoads) => {
    if (EditLoads) {
      console.log("Edit Loads...");
    }
    setOpenEditLoads(false);
  };

  const handleConfirmDeleteLoads = (DeleteLoads) => {
    if (DeleteLoads) {
      console.log("Delete Loads...");
    }
    setOpenDeleteLoads(false);
  };

  // ! filter table start
  const filterTableData = (tableDataField, searchingValue) =>
    tableDataField.toLowerCase().includes(searchingValue.toLowerCase());

  const multipleSearch = () => {
    return AllLData.filter((item) =>
      filterTableData(item.truck, companyObj.truck)
    )
      .filter((item) => filterTableData(item.driver, companyObj.driver))
      .filter((item) => filterTableData(item.company, companyObj.company))
      .filter((item) => filterTableData(item.shipping, companyObj.shipping))
      .filter((item) => filterTableData(item.trailer, companyObj.trailer));
  };

  useEffect(() => {
    const filteredData = multipleSearch();
    setTablesData(filteredData);
  }, [companyObj]);
  // ! filter table end

  return (
    <>
      <tbody>
        {tablesData.map((item) => (
          <tr key={item.id}>
            <td>
              <span style={span}>
                <input type="checkbox" />
              </span>
            </td>
            <td>
              <span style={span}>{item.truck}</span>
            </td>
            <td>
              <span style={span}>{item.driver}</span>
            </td>
            <td>
              <span style={span}>{item.company}</span>
            </td>
            <td>
              <span style={span}>{item.load_status}</span>
            </td>
            <td>
              <span style={span}>{item.shipping}</span>
            </td>
            <td>
              <span style={span}>{item.trailer}</span>
            </td>
            <td>
              <span style={span}>{item.from}</span>
            </td>
            <td>
              <span style={span}>{item.to}</span>
            </td>
            <td>
              <span style={span}>{item.deadline}</span>
            </td>
            <td>
              <span style={span}>{item.status}</span>
            </td>
            <td>
              <span style={span}>{item.comments}</span>
            </td>
            <td style={{ display: "flex", alignItems: "center" }}>
              <span>{item.actions}</span>

              {/* <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-regular fa-clock"
                  onClick={() => setOpenAddLoads(true)}
                ></i>
              </span>
            </Link>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  className="fa-solid fa-file-pen"
                  onClick={() => setOpenEditLoads(true)}
                ></i>
              </span>
            </Link>
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i
                  className="fa-regular fa-circle-xmark"
                  onClick={() => setOpenDeleteLoads(true)}
                ></i>
              </span>
            </Link> */}
            </td>
          </tr>
        ))}
      </tbody>

      <Confirm
        openAddLoads={openAddLoads}
        handleConfirmAddLoads={handleConfirmAddLoads}
        openEditLoads={openEditLoads}
        handleConfirmEditLoads={handleConfirmEditLoads}
        openDeleteLoads={openDeleteLoads}
        handleConfirmDeleteLoads={handleConfirmDeleteLoads}
      />
    </>
  );
};

export default All_loadsTable;
