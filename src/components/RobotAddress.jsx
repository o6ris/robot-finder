import React from 'react'

function RobotAddress({address}) {
    console.log(address)
  return (
    <div>
        <h2>Address :</h2>
        <p>Street : {address.street}</p>
        <p>ZipCode : {address.zipcode}</p>
        <p>City : {address.city}</p>
        <div>
            <button onClick={() => alert('coucou')} >Show Address</button>
        </div>
    </div>
  )
}

export default RobotAddress