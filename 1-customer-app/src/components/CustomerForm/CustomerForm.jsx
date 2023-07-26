import React, { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: crypto.randomUUID(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  return (
    <form className="customerForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new customer"
        className="customerInput"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <button>+</button>
    </form>
  );
};

export default CustomerForm;
