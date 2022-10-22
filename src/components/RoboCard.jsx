import React from 'react'

function RoboCard({robot}) {
    console.log(robot);
  return (
    <div>
        <div>
            <img src={`https://robohash.org/${robot.id}/set=set3`} alt="" />
        </div>
        <div>
            <h1>{robot.name}</h1>
            <div>
                <p><strong>Phone :</strong> {robot.phone}</p>
                <p><strong>Email</strong> : {robot.email}</p>
                <p><strong>Website</strong> : {robot.website}</p>
            </div>
        </div>
    </div>
  )
}

export default RoboCard