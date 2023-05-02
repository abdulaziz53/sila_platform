import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import AddNewUsers from "./AddNewUsers";

import "../Users/Users.css";
import Managers from "../Managers";

const names = [
  "Ilon",
  "Jack",
  "Bob",
  "David",
  "Jorge",
  "Bil",
  "Sam",
  "Saymon",
  "Iten",
  "Mark",
  "Maykal",
  "Alon",
  "Alex",
  "Alex",
  "Domenik",
];

const surnames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
];
const usernames = [
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Iten",
  "Mark",
  "Maykal",
  "Alon",
  "Smith",
  "Johnson",
  "Williams",
];
const companyes = [
  "General Electric",
  "	American International Group",
  "	Apple",
  "	Microsoft",
  "	Ford",
  "General Motors",
  "	PepsiCo",
  "	Coca-Cola",
  "	Intel",
  "Google",
];

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Users = ({
  headers,
  minCellWidth,
  tableContent,
  type = "text",
  ...props
}) => {
  const [tableHeight, setTableHeight] = useState("auto");
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);
  const columns = createHeaders(headers);

  useEffect(() => {
    setTableHeight(tableElement.current.offsetHeight);
  }, []);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e) => {
      const gridColumns = columns.map((col, i) => {
        if (i === activeIndex) {
          const width = e.clientX - col.ref.current.offsetLeft;

          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col.ref.current.offsetWidth}px`;
      });

      tableElement.current.style.gridTemplateColumns = `${gridColumns.join(
        " "
      )}`;
    },
    [activeIndex, columns, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  return (
    <>
      <div className="main_box">
        <div className="tab_btn_wrapper">
          <Managers />

          <AddNewUsers />
        </div>

        <div className="users_main_cont">
          <div className="users_main_inner">
            <div className="users_second_cont">
              <Box className="users_inner_cont">
                <Box className="users_select_box us_inp_search">
                  <input list="data" type="search" placeholder="Name" />
                  <datalist id="data">
                    {names.map((name) => (
                      <option style={{ color: "black" }}>{name}</option>
                    ))}
                  </datalist>
                  {/* <select id="data" list="data" itemType="search">
                  <option value="">Name</option>
                  {data.map((n) => (
                    <option style={{ color: "black" }}>{n}</option>
                  ))}
                </select> */}
                </Box>
                {/*  */}
                <Box className="us_inp_search users_select_box">
                  <input list="surname" type="search" placeholder="Surname" />
                  <datalist id="surname">
                    {surnames.map((surname) => (
                      <option style={{ color: "black" }}>{surname}</option>
                    ))}
                  </datalist>
                  {/* <select name="" id="">
                  <option value="">Surname</option>
                </select> */}
                </Box>
                {/*  */}
                <Box className="us_inp_search users_select_box">
                  <input
                    list="usersname"
                    type="search"
                    placeholder="Username"
                  />
                  <datalist id="usersname">
                    {usernames.map((usersname) => (
                      <option style={{ color: "black" }}>{usersname}</option>
                    ))}
                  </datalist>
                  {/* <select name="" id="">
                  <option value="">Username</option>
                </select> */}
                </Box>
                {/*  */}
                <Box className="us_inp_search2 users_select_box">
                  <input list="company" type="search" placeholder="Company" />
                  <datalist id="company">
                    {companyes.map((company) => (
                      <option style={{ color: "black" }}>{company}</option>
                    ))}
                  </datalist>
                  {/* <select name="" id="">
                  <option value="">Company</option>
                </select> */}
                </Box>
              </Box>
            </div>

            <div className="resize_table_main">
              <div className="container">
                <div className="table-wrapper">
                  <table
                    className="resizeable-table users_table"
                    ref={tableElement}
                  >
                    <thead>
                      <tr>
                        {columns.map(({ ref, text }, i) => (
                          <th className="table_element_th" ref={ref} key={text}>
                            <span>{text}</span>
                            <div
                              style={{
                                height: tableHeight,
                              }}
                              onMouseDown={() => mouseDown(i)}
                              className={`resize-handle ${
                                activeIndex === i ? "active" : "idle"
                              }`}
                            />
                          </th>
                        ))}
                      </tr>
                    </thead>
                    {tableContent}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
