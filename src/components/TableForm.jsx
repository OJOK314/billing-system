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
        <label htmlFor='description' className="font-semibold  text-white mb-1 text-2xl">Item description</label>
        <input
        type='text'
        name='description'
        id='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='item description'
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
        />

         <label htmlFor='quantity'className="font-semibold  text-white mb-1 text-2xl">Quantity</label>
        <input
        type='text'
        name='quantity'
        id='quantuty'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder='quantity'
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
        />

         <label htmlFor='price'className="font-semibold  text-white mb-1 text-2xl">price</label>
        <input
        type='text'
        name='price'
        id='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='price'
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
        />

           <label htmlFor='amount'className="font-semibold  text-white mb-1 text-2xl">amount</label>
        <input
        type='text'
        name='amount'
        id='amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='amount'
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500"
        />






      
      
    </div>
  )
}

export default TableForm
