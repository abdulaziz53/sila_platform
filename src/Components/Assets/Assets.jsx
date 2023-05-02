import React from "react";
import { Box } from "@mui/system";

import "../Assets/Assets.css";

const box_select = {
  height: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

const select = {
  height: "30px",
  border: "1px solid #DCDCDC",
  borderRadius: "5px",
  background: "none",
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "15px",
  color: "rgba(101, 101, 101, 0.8)",
};

const label = {
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "12px",
  color: "#FFFFFF",
};

const Assets = () => {
  return (
    <div>
      <Box
        sx={{
          width: "93%",
          height: "520px",
          margin: "13px 96px 0",
          padding: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            marginBottom: "15px",
            // padding: "0px 17px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box style={box_select} className="ass_inp_box">
            <select sx={{ width: "90%" }} style={select} name="" id="">
              <option value="">Choose company name</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} className="ass_inp_box">
            <select sx={{ width: "90%" }} style={select} name="" id="">
              <option value="">Choose driver name</option>
            </select>
          </Box>
          {/*  */}
          <Box className="ass_inp_box2" style={box_select}>
            <select sx={{ width: "90%" }} style={select} name="" id="">
              <option value="">Choose truck number</option>
            </select>
          </Box>
          {/*  */}
          <Box className="ass_inp_box3" style={box_select}>
            <select sx={{ width: "90%" }} style={select} name="" id="">
              <option value="">Choose VIN</option>
            </select>
          </Box>
          {/*  */}
          <Box className="ass_inp_box2" style={box_select}>
            <select sx={{ width: "90%" }} style={select} name="" id="">
              <option value="">Choose status</option>
            </select>
          </Box>
          {/*  */}
          <Box className="ass_inp_box2" style={box_select}>
            <select sx={{ width: "90%" }} style={select} name="" id="">
              <option value="">Choose load status</option>
            </select>
          </Box>
          {/*  */}
          <Box className="ass_inp_box2" style={box_select}>
            <select sx={{ width: "90%" }} style={select} name="" id="">
              <option value="">Last hours</option>
            </select>
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387199.60873422417!2d-74.55402117692708!3d40.69606496876443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2skg!4v1675325027417!5m2!1sru!2skg"
            width="100%"
            height="100%"
            style={{
              borderRadius: "30px",
              padding: "0",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </div>
  );
};

export default Assets;

// import React, { useState } from "react";

// import "../Assets/Assets.css";

// function Assets() {
//   return (
//     <div className="App">
//       {/* <h1>A Toggle-Switch</h1> */}
//       <ToggleSwitch />
//     </div>
//   );
// }

// function ToggleSwitch() {
//   const [isToggleOn, setIsToggleOn] = useState(false);

//   const handleClick = () => {
//     setIsToggleOn(!isToggleOn);
//   };

//   return (
//     <div onClick={handleClick} className="ToggleSwitch">
//       <div className={isToggleOn ? "knob active" : "knob"} />
//       {isToggleOn ? "now it's on" : "now it's off"}
//     </div>
//   );
// }

// export default Assets;
