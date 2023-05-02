import * as React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/system";

import AddNewCompany from "./AddNewCompany";
import Companies from "../Companies";

import "../All_Company/All_companies.css";

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const All_Companies = ({
  headers,
  minCellWidth,
  tableContent,
  handleInput,
  displayOption,
  handleOptionChange,
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

  // !

  return (
    <>
      <div className="main_box">
        <div className="tab_btn_wrapper">
          <Companies />

          <AddNewCompany />
        </div>
        <div className="allC_mail_box">
          <Box className="allC_main_cont__inner">
            <Box className="allC_filter_box">
              <Box className="inp_box_1 all_inp_box">
                {/* <label>US DOT #</label> */}
                <input
                  className="allC_inp"
                  type="search"
                  placeholder="us dot"
                  name="us_dot"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box className="inp_box_2 all_inp_box">
                {/* <label>Company name:</label> */}
                <input
                  className="allC_inp"
                  type="search"
                  placeholder="company name"
                  name="company_name"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box className="inp_box_2 all_inp_box">
                {/* <label>Address:</label> */}
                <input
                  className="allC_inp"
                  type="search"
                  placeholder="address"
                  name="address"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box className="inp_box_2 all_inp_box">
                {/* <label>Phone number:</label> */}
                <input
                  className="allC_inp"
                  type="search"
                  placeholder="phone number"
                  name="phone_number"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box className="inp_box_3 all_slc_box">
                {/* <label>Status</label> */}

                <select
                  className="slc_box"
                  value={displayOption}
                  onChange={handleOptionChange}
                >
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </Box>
            </Box>
            {/*  */}
            <div className="resize_table_main">
              <div className="container">
                <div className="table-wrapper">
                  <table
                    className="resizeable-table all_companies__table"
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
                {/* <button onClick={resetTableCells}>Reset</button> */}
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default All_Companies;
