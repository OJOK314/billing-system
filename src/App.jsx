import React from "react"
import "./App.css"

function App() {

   function handleprint() {
    window.print()
    
   }

  return (
    <>
   <main>
   <header>
    <div>
      <h2>Invoicer</h2>
    </div>

    <div>
      <ul>
        <button  onClick={handleprint}>Print a copy</button>
         <button>DownLoad</button>
          <button>Send</button>
         
      </ul>
    </div>
   </header>


   <section>
    <h2>OSBERT AINEMBABAZI</h2>
    <p>Your Address</p>
   </section>


   <section>
    <h2>Client's Name</h2>
    <p>
      Client's Address
    </p>
   </section>

   <article>
    <ul>
      <li>Invoicer Number:</li>
      <li>Invoice Date:</li>
      <li>Due Date:</li>
    </ul>
   </article>

   <section>
    <p>Notes to the Clients....</p>
   </section>

   <footer>
    <ul>
      <li>Your Name</li>
         <li>Your Email</li>
            <li>Phone Number</li>
               
                  <li>Bank</li>
                     <li>Account holder</li>
                        <li>Account Number</li>
                        <li>Website</li>
    </ul>
   </footer>
    </main> 
    </>
  )
}

export default App
