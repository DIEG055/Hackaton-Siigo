import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerController from './data/controllers/CustomerController';

function App() {

  const [value,setInput] = useState('');

  return (
    <div>
        <label>
          Name:
          <input type="text" value={value} onChange={(e)=>setInput(e.target.value)} />
        </label>
        <input type="submit" value="Submit" onClick={()=>{
          const customerController = new CustomerController();
          {/* customerController.createCustomer(value,{ciudad:"bogota",place:true}); */}
          {/* customerController.updateCustomer(value,{place:false}) */}
          console.log(customerController.readCustomer(value))
        }} />
    </div>
  );
}

export default App;
