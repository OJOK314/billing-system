import React from 'react'

const Footer = ({name,address,email,website,bankAccount,bankName,phone, accountHolder}) => {
  return (
    <div>
      <footer>
    <ul>
      <li> <span className="font-bold ">Your Name:</span>{name}</li>
         <li> <span className="font-bold ">Your Email:</span>{email} </li>
           <li> <span className="font-bold ">Address:</span>{address} </li>
            <li> <span className="font-bold ">Phone Number:</span>{phone}</li>
               
                  <li> <span className="font-bold ">Bank: </span>{bankName}</li>
                     <li> <span className="font-bold ">Account holder: </span>{accountHolder}</li>
                        <li> <span className="font-bold ">Account Number :</span> {bankAccount}</li>
                        {/* <li> <span className="font-bold ">Website: </span><a href={website} target='_blank' rel='noopener noreferrer'></a> {website}</li>
                         */}
                        <li>
  <span className="font-bold">Website: </span>
  <a href={website} target="_blank" rel="noopener noreferrer">
    {website}
  </a>
</li>

    </ul>
   </footer>
    </div>
  )
}

export default Footer
