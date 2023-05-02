import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/system";

import "./InspectedDrivers.css";

import SuperLogs from "../SuperLogs";

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const InspectedDrivers = ({
  headers,
  minCellWidth,
  tableContent,
  handleInput,
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
          <SuperLogs />
        </div>
        <div style={{ width: "98%", height: "100%" }}>
          <Box className="inc_dr__main_cont">
            <Box className="inc_dr__second_cont">
              {/*  */}
              <Box
                sx={{
                  maxWidth: "146px",
                }}
                className="inc_dr__inp_box"
              >
                <input
                  type="search"
                  placeholder="name"
                  name="name"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box
                sx={{
                  maxWidth: "236px",
                }}
                className="inc_dr__inp_box"
              >
                <input
                  type="search"
                  placeholder="surname"
                  name="surname"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box className="inc_dr__slc_box" sx={{ width: "175px" }}>
                <select name="" id="">
                  <option value="">Venture Motor Freight</option>
                </select>
              </Box>
              {/*  */}
              <Box
                sx={{
                  maxWidth: "160px",
                }}
                className="inc_dr__inp_box"
              >
                <input type="date" placeholder="23/03/2022" />
              </Box>
            </Box>
            {/*  */}
            <div className="resize_table_main">
              <div className="container">
                <div className="table-wrapper">
                  <table
                    className="resizeable-table inspected_drivers__table"
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
          </Box>
        </div>
      </div>
    </>
  );
};

export default InspectedDrivers;
