import { useState } from "react";
import "./App.css";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import CustomerList from "./components/CustomerList/CustomerList";

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (customer) => {
    setCustomers([...customers, customer]);
    console.log(customers);
  };
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  );
}

export default App;
