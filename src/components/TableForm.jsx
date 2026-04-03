// import React from 'react'
// import { useEffect } from 'react'
// // import {v4 and uuid} from "uuidv4"
const TableForm = ( {
    description, 
    setDescription ,
              quantity,
              setQuantity,
              price,
              setPrice,
              amount,
              setAmount
   }
    
) => {
   

  return (
    <div className="flex flex-col">
        <label htmlFor='description'>Item description</label>
        <input
        type='text'
        name='description'
        id='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='item description'
        />

         <label htmlFor='quantity'>Quantity</label>
        <input
        type='text'
        name='quantity'
        id='quantuty'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder='quantity'
        />

         <label htmlFor='price'>price</label>
        <input
        type='text'
        name='price'
        id='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='price'
        />

           <label htmlFor='amount'>amount</label>
        <input
        type='text'
        name='amount'
        id='amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='amount'
        />






      
      
    </div>
  )
}

export default TableForm
