import React from 'react'

const MainDetails = ({name, address}) => {
  return (
    <div>
        <section>
    <h2>{name}</h2>
    <p>{address}</p>
   </section>
    </div>
  )
}

export default MainDetails
