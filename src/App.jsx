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
  const [accountHolder, setAccountHolder] = useState("");
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
            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />
            <Date
              invoicerNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table />
            <Notes notes={notes} />
            <Footer
              name={name}
              email={email}
              address={address}
              website={website}
              bankAccount={bankAccount}
              bankName={bankName}
              phone={phone}
            />
            <button
              onClick={() => setShowInvoice(false)}
              className="bg-blue-500  border-2 mt-5 font-bold border-amber-400 py-2 px-8 hover:bg-emerald-950 rounded shadow hover:text-amber-50  text-amber-50 "
            >
              Edit Information
            </button>
          </div>
        ) : (
         <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-5">

  {/* Section Title */}
  <h2 className="text-2xl font-bold text-gray-800 mb-2">Invoice Details</h2>

  {/* Input Group */}
  <div className="flex flex-col">
    <label htmlFor="name" className="font-semibold text-gray-700 mb-1">
      Enter your name
    </label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
    />
  </div>

 

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label className="font-semibold text-gray-700 mb-1">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
        placeholder="Enter email"
      />
    </div>

     <div className="flex flex-col">
    <label className="font-semibold text-gray-700 mb-1">
      Enter Your Address
    </label>
    <input
      type="text"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
      placeholder="Enter your address"
    />
  </div>

   <div className="flex flex-col">
    <label className="font-semibold text-gray-700 mb-1">
      Enter Your Address
    </label>
    <input
      type="text"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
      placeholder="Enter your address"
    />
  </div>

    <div className="flex flex-col">
      <label className="font-semibold text-gray-700 mb-1">Website</label>
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
        placeholder="Enter website"
      />
    </div>
  </div>

  {/* Bank Info */}
  <h3 className="text-lg font-bold text-gray-800 mt-4">Bank Details</h3>

  <input
    type="text"
    placeholder="Bank Account"
    value={bankAccount}
    onChange={(e) => setBankAccount(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

  <input
    type="text"
    placeholder="Account Holder"
    value={accountHolder}
    onChange={(e) => setAccountHolder(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

  <input
    type="text"
    placeholder="Bank Name"
    value={bankName}
    onChange={(e) => setBankName(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

  {/* Client Info */}
  <h3 className="text-lg font-bold text-gray-800 mt-4">Client Details</h3>

  <input
    type="text"
    placeholder="Client Name"
    value={clientName}
    onChange={(e) => setClientName(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

  <input
    type="text"
    placeholder="Client Address"
    value={clientAddress}
    onChange={(e) => setClientAddress(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

  {/* Dates */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Invoice Number"
      value={invoiceNumber}
      onChange={(e) => setInvoiceNumber(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
    />

    <input
      type="date"
      value={invoiceDate}
      onChange={(e) => setInvoiceDate(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
    />
  </div>

  <input
    type="date"
    value={dueDate}
    onChange={(e) => setDueDate(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />
<label>Additional Notes</label>
  <textarea
    placeholder="Notes"
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

  {/* Button */}
  <button
    onClick={() => setShowInvoice(true)}
    className="bg-amber-600 hover:bg-amber-700 transition-all text-white text-lg font-semibold py-3 rounded-xl shadow-md hover:scale-[1.02]"
  >
    Preview Invoice
  </button>
</div>

        )}
      </main>
    </>
  );
}

export default App;
