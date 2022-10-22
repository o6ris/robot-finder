import React, {useState} from 'react'

function RobotAddress({address}) {
    const [showAddress, setShowAddress] = useState(false);

    const handleDisplayAddressOnClick = () =>{
        setShowAddress(!showAddress);
    }
  return (
    <div className='d-none'>
        {console.log(showAddress)}
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