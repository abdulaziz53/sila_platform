import * as React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/system";

import AddNewRoles from "./AddNewRoles";

import "../Roles/Roles.css";
import Managers from "../Managers";

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Roles = ({ headers, minCellWidth, tableContent }) => {
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

          <AddNewRoles />
        </div>
        {/* <div className="role_border"></div> */}
        <div className="roles_main_cont">
          <div className="roles_inner_cont">
            <div className="resize_table_main">
              <div className="role_container">
                <div className="role_table_wrapper">
                  <table
                    className="role_resizeable_table roles_table"
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

export default Roles;
