import ScaleLoader from "react-spinners/ScaleLoader";
import React, { useState } from "react";

function Loader() {
  
  let [loading, setLoading] = useState(true);
  return (
    <div className="sweet-loading text-center mt-5">

      <ScaleLoader color='#000' loading={loading} size={150} />
    </div>
  );
}

export default Loader;
