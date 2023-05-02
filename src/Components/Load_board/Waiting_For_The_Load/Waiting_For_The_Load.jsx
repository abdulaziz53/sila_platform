import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/system";
import Load_board from "../Load_board";

import "./Waiting_For_The_Load.css";

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Waiting_For_The_Load = ({
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
          <Load_board />
        </div>

        <div style={{ width: "98%", height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FFFFFF",
              marginTop: "-3px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "53px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "3px solid #2d4f82",
                // padding: "15px 17px 15px 17px",
                // marginLeft: "20px",
              }}
            >
              {/*  */}
              <Box
                sx={{
                  maxWidth: "146px",
                }}
                className="wftl_inp_box"
              >
                <input
                  type="search"
                  placeholder="truck"
                  name="truck"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box
                sx={{
                  maxWidth: "242px",
                }}
                className="wftl_inp_box"
              >
                <input
                  type="search"
                  placeholder="driver"
                  name="driver"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box
                sx={{
                  maxWidth: "242px",
                }}
                className="wftl_inp_box"
              >
                <input
                  type="search"
                  placeholder="company"
                  name="company"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box sx={{ maxWidth: "242px" }} className="wftl_inp_box">
                <input type="email" placeholder="Chicago IL" />
              </Box>
              {/*  */}
              <Box className="wftl_select_box">
                <select name="" id="">
                  <option value="">active</option>
                </select>
              </Box>
            </Box>
            {/*  */}
            <div className="resize_table_main">
              <div className="container">
                <div className="table-wrapper">
                  <table
                    className="resizeable-table waiting_for_the_load__table"
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

export default Waiting_For_The_Load;
