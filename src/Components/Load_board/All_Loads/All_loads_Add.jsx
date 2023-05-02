import React from "react";
// import { Box, Typography } from "@mui/material";

// import AddLoads from "./All_loads_Add.module.css";

// import LoadGraph from "../../../Assets/Image/Load_graph.png";

const add_btn = {
  cursor: "pointer",
  width: "151px",
  height: "30px",
  border: "3px solid #FFFFFF",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  background: "none",
  padding: 0,
};

function Confirm({ openAddLoads, handleConfirmAddLoads }) {
  return (
    <>
      <div></div>
    </>
  );
}

const All_loads_Add = () => {
  const [openAddLoads, setOpenAddLoads] = React.useState(false);

  const handleConfirmAddLoads = (AddLoads) => {
    if (AddLoads) {
      console.log("Add Loads...");
    }

    setOpenAddLoads(false);
  };

  return (
    <>
      <div>
        <button
          style={add_btn}
          className="button"
          onClick={() => setOpenAddLoads(true)}
        >
          <p
            style={{
              display: "flex",
              width: "120px",
              height: "15px",
              color: "#fff",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "15px",
              margin: 0,
            }}
          >
            Add new load info +
          </p>
        </button>
      </div>
      <Confirm
        openAddLoads={openAddLoads}
        handleConfirmAddLoads={handleConfirmAddLoads}
      />
    </>
  );
};

export default All_loads_Add;
