import React from 'react'
import { useEffect } from 'react'
// import {v4 and uuid} from "uuidv4"
const TableForm = ( {description, setDescription 
   }
    
) => {
   

  return (
    <div>
        <label htmlFor='description'>Item description</label>
        <input
        type='text'
        name='description'
        id='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='item description'
        />




      
      
    </div>
  )
}

export default TableForm
