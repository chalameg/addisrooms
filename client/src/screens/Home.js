import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";

function Home() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  useEffect(() => {
    const getRooms = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/rooms/getallrooms");

        setRooms(data.data);

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
      <div className="row justify-content-center mt-3">
        {loading ? (
          <h1>Loading...</h1>
        ) : error !== "" ? (
          <h1>Error Occured {error}</h1>
        ) : (
          rooms.map((room, i) => {
            return (
              <div className="col-md-9">
                <Room key={room._id} room={room} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
