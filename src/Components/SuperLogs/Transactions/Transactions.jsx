import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/material";

import "../Transactions/Transactions.css";
import SuperLogs from "../SuperLogs";

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Transactions = ({ headers, minCellWidth, tableContent }) => {
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
          <SuperLogs />
        </div>

        <div className="transac_main_cont">
          <Box className="transac_inner_cont">
            <Box className="transac_select_box" sx={{ width: "250px" }}>
              <select name="" id="">
                <option value="">Company name</option>
              </select>
            </Box>
            {/*  */}
            <Box className="transac_select_box" sx={{ width: "200px" }}>
              <select name="" id="">
                <option value="">User</option>
              </select>
            </Box>
            {/*  */}
            <Box className="transac_select_box" sx={{ width: "200px" }}>
              <select name="" id="">
                <option value="">Driver name</option>
              </select>
            </Box>
            {/*  */}
            <Box className="transac_select_box" sx={{ width: "169px" }}>
              <select name="" id="">
                <option value="">Truck number</option>
              </select>
            </Box>
            {/*  */}
            <Box className="transac_select_box" sx={{ width: "169px" }}>
              <select name="" id="">
                <option value="">Status</option>
              </select>
            </Box>
          </Box>

          <div className="resize_table_main">
            <div className="container">
              <div className="table-wrapper">
                <table
                  className="resizeable-table transactions_table"
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
    </>
  );
};

export default Transactions;
