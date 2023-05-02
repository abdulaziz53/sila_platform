import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/system";
import Load_board from "../Load_board";

import "./Do_Not_Disturb.css";

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Do_Not_Disturb = ({ headers, minCellWidth, tableContent }) => {
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
            className="dnd_main_cont"
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "#FFFFFF",
              marginTop: "-3px",
            }}
          >
            <Box className="dnd_second_cont">
              <Box
                className="dnd_select_box"
                sx={{
                  maxWidth: "171px",
                }}
              >
                <select className="sel select_1">
                  <option value="">active</option>
                </select>
              </Box>
              <Box className="dnd_select_box" sx={{ maxWidth: "250px" }}>
                <select className=" sel select_2">
                  <option value="">active</option>
                </select>
              </Box>
              <Box className="dnd_select_box" sx={{ maxWidth: "250px" }}>
                <select className="sel select_3">
                  <option value="">active</option>
                </select>
              </Box>
            </Box>
            {/*  */}
            <div className="resize_table_main">
              <div className="container">
                <div className="table-wrapper">
                  <table
                    className="resizeable-table do_not_disturb__table"
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

export default Do_Not_Disturb;
