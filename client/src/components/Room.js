import React from 'react'

function Room({room}) {
  return (
    <div>
        <div className="row">
          <div className="col-md-4">
            <img src={room.images[0]} alt="" />
          </div>
          <div className="col-md-8">
            <h1>{room.name}</h1>
            <span>Max Count: {room.maxcount}</span>
            <p>Phone Number: {room.phonenumber}</p>
            <p>TYpe: {room.type}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            
          </div>
          <div className="col-md-2">
          <button>book now</button>
          </div>
          <div className="col-md-2">
            <button>view details</button>
            
          </div>
        </div>
    </div>
  )
}

export default Room