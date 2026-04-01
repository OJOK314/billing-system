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

  const [name, setName] = useState("name");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleprint() {
    window.print();
  }

  return (
    <>
      <main>
        {showInvoice ? (
          <div>
            <Header handleprint={handleprint} />
            <MainDetails name={name} email={email} address={address} />
            <ClientDetails />
            <Date />
            <Table />
            <Notes />
            <Footer name={name} email={email} address={address} website={website} bankAccount={bankAccount} bankName={bankName}/>
            <button
              onClick={() => setShowInvoice(false)}
              className="bg-blue-500  border-2 mt-5 font-bold border-amber-400 py-2 px-8 hover:bg-emerald-950 rounded shadow hover:text-amber-50  text-amber-50 "
            >
              Edit Information
            </button>
          </div>
        ) : (
          <div className=" flex flex-col">
            <label htmlFor="name" className="font-bold ">Enter your name</label>
            <input
              type="text"
              name="name"
              id="name"
            
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="address"> Enter Your Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter Your address"
              autoComplete="off"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter gmail"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />


            <label htmlFor="url">Website</label>
            <input
              type="text"
              name="websit"
              id="website"
              placeholder="Enter website"
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

              <label htmlFor="bank">Bank Account</label>
            <input
              type="text"
              name="bankAccount"
              id="bankAccount"
              placeholder="bankAccount"
              autoComplete="off"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
            />

              <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              name="bankName"
              id="bankName"
              placeholder="bank Name"
              autoComplete="off"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />




            <button
              onClick={() => setShowInvoice(true)}
              className="bg-amber-700 text-2xl border-2 m  text-amber-50 p-8 rounded-2xl "
            >
              Preview
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
