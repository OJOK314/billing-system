 import React from 'react'
 
 const Date = ({invoicerNumber,invoiceDate,dueDate}) => {
   return (
     <div>
       
   <article>
    <ul>
      <li><span className="font-bold "> Invoice Number: </span>{invoicerNumber}</li>
      <li><span className="font-bold ">Invoice Date:</span>{invoiceDate}</li>
      <li><span className="font-bold ">Due Date:</span>{dueDate}</li>
    </ul>
   </article>
     </div>
   )
 }
 
 export default Date
 