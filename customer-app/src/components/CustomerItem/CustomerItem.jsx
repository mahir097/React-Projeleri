import React from "react";
import "./CustomerItem.css";

const CustomerItem = ({ customer, onDelete }) => {
  console.log(customer);
  return (
    <>
      <li className="customerItem">
        <div className="customerInfo">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="customerAvatar"
          />
          <span className="customerName">{customer.customerName}</span>
        </div>
        <button className="deleteButton" onClick={() => onDelete(customer.id)}>
          🗑
        </button>
      </li>
    </>
  );
};

export default CustomerItem;
