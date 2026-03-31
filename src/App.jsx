import React, { useState } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import "./App.css";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Date from "./components/Date";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  function handleprint() {
    window.print();
  }

  return (
    <>
      <main>

        {showInvoice ? (

          <div>
        <Header handleprint={handleprint} />
        <MainDetails />
        <ClientDetails />
        <Date />
        <Table />
        <Notes />
        <footer />
          <button onClick={() => setShowInvoice(false)}>Edit Information</button>
        </div>
        ): (

         <div>
           <input type="text" name="text" id="text" placeholder="Enter Your name" autoComplete="off" onChange={(e) => setShowInvoice(e.target.value)}/>
          <button onClick={() => setShowInvoice(true)}>Preview</button>
         </div>
        )}
        
      </main>
    </>
  );
}

export default App;
