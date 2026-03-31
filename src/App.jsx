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
      <li><span className="font-bold ">Invoicer Number:</span></li>
      <li><span className="font-bold ">Invoice Date:</span></li>
      <li><span className="font-bold ">Due Date:</span></li>
    </ul>
   </article>

   <section>
    <p>Notes to the Clients....</p>
   </section>

   <footer>
    <ul>
      <li> <span className="font-bold ">Your Name:</span> OSBERT AINEMBABAZI</li>
         <li> <span className="font-bold ">Your Email:</span> osbert@gmail.com</li>
            <li> <span className="font-bold ">Phone Number:</span> 0703326458</li>
               
                  <li> <span className="font-bold ">Bank: </span>bank Account</li>
                     <li> <span className="font-bold ">Account holder: </span>OSBERT AINEMBABAZI</li>
                        <li> <span className="font-bold ">Account Number :</span> 90300020363036</li>
                        <li> <span className="font-bold ">Website: </span>https://osbert</li>
    </ul>
   </footer>
    </main> 
    </>
  )
}

export default App
