import React, {useState} from 'react'

function RobotAddress({address}) {
    const [showAddress, setShowAddress] = useState(false);

    const handleDisplayAddressOnClick = () =>{
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
            <button className=
            {
            `robot-button ${!showAddress?'robot-button-showAddress':'robot-button-hideAddress'}`
            } onClick={() => handleDisplayAddressOnClick()} >{!showAddress?'Show Address':'Hide Address'}</button>
        </div>
    </div>
  )
}

export default RobotAddress