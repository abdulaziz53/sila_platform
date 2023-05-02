import * as React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/system";

import Compananies from "../Companies";

import "../Subckriptions/Subckriptions.css";

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Subckribtions = ({
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
          <Compananies />
        </div>
        <div className="subc_main_cont">
          <Box className="main_cont__inner">
            <Box className="subc_filter__cont">
              <Box className="subc_inp_box_1 subc_inp_box">
                <input
                  className="subc_input"
                  type="search"
                  placeholder="us dot"
                  name="us_dot"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box className="subc_inp_box_2 subc_inp_box">
                <input
                  className="subc_input"
                  type="search"
                  placeholder="company name"
                  name="company_name"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box className="subc_inp_box_2 subc_inp_box">
                <input
                  className="subc_input"
                  type="search"
                  placeholder="phone number "
                  name="phone_number"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box className="subc_inp_box_2 subc_inp_box">
                <input
                  className="subc_input"
                  type="search"
                  placeholder="start date"
                  name="start_date"
                  onChange={handleInput}
                />
              </Box>
              {/*  */}
              <Box className="subc_inp_box_3 subc_select_box">
                <select className="subc_select" name="" id="">
                  <option value="">All</option>
                  <option value="">Active</option>
                  <option value="">Inactive</option>
                </select>
              </Box>
            </Box>
            {/*  */}
            <div className="resize_table_main">
              <div className="container">
                <div className="table-wrapper">
                  <table
                    className="resizeable-table sub_table"
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

export default Subckribtions;
