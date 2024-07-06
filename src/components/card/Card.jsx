import React from "react";

const Card = ({ title, amount, icon: Icon }) => {
  return (
    <span
      style={{
        display: "inline-flex",
        gap: "30px",
        border: "2px solid grey",
        padding: "20px",
        borderRadius: "10px",
        color: "white",
        backgroundColor: "rgb(11, 8, 47)",
      }}
      className="card"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "600",
            paddingBottom: "5px",
          }}
        >
          {title}
        </span>
        <span>{amount}</span>
      </div>
      <Icon />
    </span>
  );
};

export default Card;
