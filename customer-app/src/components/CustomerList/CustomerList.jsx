import React from "react";
import "./CustomerList.css";
import CustomerItem from "../CustomerItem/CustomerItem";

const CustomerList = ({ customers, setCustomers }) => {
  function handleDelete(id) {
    const newCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(newCustomers);
  }

  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <CustomerItem
          key={customer.id}
          customer={customer}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default CustomerList;
