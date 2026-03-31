import React from 'react'

const Header = ({handleprint}) => {
  return (
    <div>
       <header>
    <div>
      <h2>Invoicer</h2>
    </div>

    <div>
      <ul>
        <button  onClick={handleprint}>Print</button>
         <button>DownLoad</button>
          <button>Send</button>
         
      </ul>
    </div>
   </header>
    </div>
  )
}

export default Header
