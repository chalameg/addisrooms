import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom'
import axios from "axios";

function Booking() {
  const [room, setRoom] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const location = useLocation();
  const pathnameArr = location.pathname.split("/");

  //get last index as id at the last
  const roomId = pathnameArr.slice(-1)[0];
  // console.log(roomId)
  
  useEffect(() => {
    const getRooms = async () => {
      
      try {
        setLoading(true);

        const { data } = await axios.get(`/api/rooms/getroom/${roomId}`);

        setRoom(data.data);

        console.log(data.data.imageurls[0]);
      } catch (error) {
        setError(error);
        // console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getRooms();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 shadow bg-white rounded p-2">
        {loading ? (
          <h1>Loading...</h1>
        ) : error !== "" ? (
          <h1>Error Occured {error}</h1>
        ) : (
          <div className="row">
            <div className="col-md-6">
              <h3>{room.name}</h3>
              <img src={room.imageurls ? room.imageurls[0] : ""} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
              <div className="row to-the-right">
                <h3><b>Booking Details</b></h3>
              </div>
              <hr />
              <div className="row to-the-right">
                <p>Name: {}</p>
                <p>From Date: {}</p>
                <p>To Data: {}</p>
                <p>Max Count: {room.maxcount}</p>
              </div>
              <div className="row to-the-right">
                <h3><b>Amount</b></h3>
              </div>
              <hr />
              <div className="row to-the-right">
                <p>Total Days: <b>{}</b></p>
                <p>Rent per day: <b>{room.rentperday}</b></p>
                <h3><b>Total Amount: {}</b></h3>
              </div>
              <button className="btn btn-primary b-to-the-right">
                Pay Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
