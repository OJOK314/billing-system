import React from 'react'

const Header = ({handleprint}) => {
  return (
    <div className='bg-amber-800 px-6 py-8 '>
       <header>
    <div>
      <h2>INVOICER</h2>
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
