import React from 'react'

const ClientDetails = ({clientName,clientAddress}) => {
  return (
    <div>
        <section>
    <h2><span>Client Name</span>{clientName}</h2>
    <p>
      <span className='font-bold  '><em>Client Address:</em></span>
     {clientAddress} 
    </p>
   </section>
      
    </div>
  )
}

export default ClientDetails
