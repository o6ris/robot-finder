import React, {useState} from 'react'

function RobotAddress({address}) {
    const [showAddress, setShowAddress] = useState(false);
    
    // Function to handle the value of showAddress
    const handleDisplayAddressOnClick = (event) =>{
        // stop propagation onClick on container (RobotCard)
        event.stopPropagation();
        setShowAddress(!showAddress);
    }
  return (
      <div>
        <div className={!showAddress?'d-none':'""'}>
  
            <h3><small>Address :</small></h3>
            <ul>
                <li><strong>Street :</strong> {address.street}</li>
                <li><strong>ZipCode :</strong> {address.zipcode}</li>
                <li><strong>City :</strong> {address.city}</li>
            </ul>
        </div>

        <div>
            {/* call handleDisplayAddressOnClick function on click to change the style
            of the button and handle the address display*/}
            <button className=
            {
            `robot-button-black ${!showAddress?'robot-button-showAddress':'robot-button-hideAddress'}`
            } onClick={(event) => handleDisplayAddressOnClick(event)} >{!showAddress?'Show Address':'Hide Address'}</button>
        </div>
    </div>
  )
}

export default RobotAddress