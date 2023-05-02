import React from "react";

const span = {
  height: "15px",
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "12px",
  color: "#000000",
};

const trsc_btn = {
  background: "rgba(146, 167, 199, 0.28)",
  borderRadius: "5px",
  cursor: "pointer",
  width: "68px",
  height: "30px",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  color: "#004665",
};

function Confirm({ openTransactions, handleConfirmTransactions }) {
  return (
    <>
      <div></div>
    </>
  );
}

const TransactionsTable = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [openTransactions, setopenTransactions] = React.useState(false);

  const handleConfirmTransactions = (Transactions) => {
    if (Transactions) {
      console.log("Transactions");
    }

    setopenTransactions(false);
  };
  return (
    <>
      <tbody>
        <tr>
          <td>
            <span style={span}>
              <input type="checkbox" />
            </span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight LLC</span>
          </td>
          <td>
            <span style={span}>Alina Mone</span>
          </td>
          <td>
            <span style={span}>Ilon Musk</span>
          </td>
          <td>
            <span style={span}>1001A</span>
          </td>
          <td>
            <span style={span}>Rejected</span>
          </td>
          <td>
            <span style={span}>Just PTI</span>
          </td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <button style={trsc_btn}>View</button>
          </td>
        </tr>
      </tbody>
      <Confirm
        openTransactions={openTransactions}
        handleConfirmTransactions={handleConfirmTransactions}
      />
    </>
  );
};

export default TransactionsTable;
