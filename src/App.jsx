import React, { useState } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import "./App.css";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Date from "./components/Date";
import TableForm from "./components/TableForm";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("ALFRED DZEK");
  const [address, setAddress] = useState("gulu");
  const [email, setEmail] = useState("admin@gmail.com");
  const [phone, setPhone] = useState("0777520905");
  const [bankName, setBankName] = useState("ABSA");
  const [bankAccount, setBankAccount] = useState("1234567890");
  const [accountHolder, setAccountHolder] = useState("Erick");
  const [website, setWebsite] = useState("https://kanzucodefoundation.org/contact-us/");
  const [clientName, setClientName] = useState("John Doe");
  const [clientAddress, setClientAddress] = useState("Nairobi, Kenya");
  const [invoiceNumber, setInvoiceNumber] = useState("004");
  const [invoiceDate, setInvoiceDate] = useState("20/10/2021");
  const [dueDate, setDueDate] = useState("01/11/2021");
  const [notes, setNotes] = useState("pay to the bank account indicated");
  const [description,setDescription] = useState("")
    const [quantity,setQuantity] = useState("")
      const [price,setPrice] = useState("")
        const [amount,setAmount] = useState("")

  function handleprint() {
    window.print();
  }

  return (
    <>
      <main >
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
            <Table description={description}  quantity={quantity} amount={amount}  /> 
          
            <Notes notes={notes} />
            <Footer
              name={name}
              email={email}
              address={address}
              website={website}
              bankAccount={bankAccount}
              bankName={bankName}
              phone={phone}
              accountHolder={accountHolder}
            />
            <button
              onClick={() => setShowInvoice(false)}
              className="bg-blue-500  border-2 mt-5  font-bold border-amber-400  hover:bg-emerald-950 rounded shadow hover:text-amber-50  text-amber-50 "
            >
              Edit Information
            </button>
          </div>
        ) : (

         <div className="max-w-6xl mx-auto bg-blue-400 p-8 rounded-2xl shadow-lg flex flex-col gap-6 ">

  {/* Section Title */}
  <h2 className="text-4xl font-bold text-white mb-2 text-center hover:bg-amber-950 hover:text-emerald-600 uppercase underline "><em>Invoice Details</em></h2>

  {/* Input Group */}
  <div className="flex flex-col">
    <label htmlFor="name" className="font-semibold mb-1  text-white  text-2xl ">
      Enter your name
    </label>
    <input
      type="text"
      id="name"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-amber-500  "
    />
  </div>

 

  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div className="flex flex-col">
      <label className="font-semibold text-white mb-1 text-2xl">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
        placeholder="Enter email"
      />
    </div>

     <div className="flex flex-col">
    <label className="font-semibold  text-white mb-1 text-2xl">
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
    <label className="font-semibold  text-white mb-1 text-2xl">
      Phone number
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
      <label className="font-semibold  text-white mb-1 text-2xl ">Website</label>
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
  <h3 className="font-bold  mt-4   text-2xl underline   text-amber-300">Bank Details</h3>
<label className="font-semibold  text-white mb-1 text-2xl">Accoun Number</label>
  <input
    type="text"
    placeholder="Account Number"
    value={bankAccount}
    onChange={(e) => setBankAccount(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

<label className="font-semibold  text-white mb-1 text-2xl">Account Holder</label>
  <input
    type="text"
    placeholder="Account Holder"
    value={accountHolder}
    onChange={(e) => setAccountHolder(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

<label className="font-semibold  text-white mb-1 text-2xl" >Bank Name</label>
  <input
    type="text"
    placeholder="Bank Name"
    value={bankName}
    onChange={(e) => setBankName(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

  {/* Client Info */}
  <h3 className="text-2xl font-bold  mt-4 underline  text-amber-300">Client Details</h3>
<label className="font-semibold  text-white mb-1 text-2xl">Cleint Name</label>
  <input
    type="text"
    placeholder="Client Name"
    value={clientName}
    onChange={(e) => setClientName(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />
<label className="font-semibold  text-white mb-1 text-2xl">Client Address</label>
  <input
    type="text"
    placeholder="Client Address"
    value={clientAddress}
    onChange={(e) => setClientAddress(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

<label className="font-semibold  text-white mb-1 text-2xl">Invoice Number</label>
  {/* Dates */}
  <div className="flex grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Invoice Number"
      value={invoiceNumber}
      onChange={(e) => setInvoiceNumber(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
    />

<label className="font-semibold  text-white mb-1 text-2xl flex text-center ">Invoice Date</label>
    <input
      type="date"
      value={invoiceDate}
      onChange={(e) => setInvoiceDate(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
    />
  </div>

<label className="font-semibold  text-white mb-1 text-2xl">Due Date</label>
  <input
    type="date"
    value={dueDate}
    onChange={(e) => setDueDate(e.target.value)}
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
  />

  
  <label className="font-semibold  text-white mb-1 text-2xl">Item Description</label>
 
    <input
      type="text"
      placeholder="item description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
    />
    
<label className="text-2xl underline  text-amber-300">Additional Notes</label>
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
