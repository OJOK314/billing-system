import React from "react"

function App() {

  function handlePrint() {
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
        <button  onClick={handlePrint}>Print</button>
         <button>DownLoad</button>
          <button>Send</button>
         
      </ul>
    </div>
   </header>


   <section>
    <h2>ALFRED OJOK</h2>
   </section>
    </main> 
    </>
  )
}

export default App
