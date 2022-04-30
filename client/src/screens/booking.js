import React, { useState, useEffect } from "react";
import axios from "axios";

function Booking() {
  const [room, setRoom] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  useEffect(() => {
    const getRooms = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/rooms/getallrooms");

        setRoom(data.data);

        console.log(data.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getRooms();
  }, []);

  return (
    <div className="container">
      
    </div>
  );
}

export default Booking;
