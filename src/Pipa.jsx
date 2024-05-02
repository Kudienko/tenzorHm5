import React from "react";
import axios from "axios";

function Pipa() {
  const handler = async () => {
    const response = await axios.get(
        'http://127.0.0.1:8000/api/get_city?city=тюмень',
      );
      console.log(response);
  };

  return (
    <div>
      <button onClick={handler}>нажми меня</button>
    </div>
  );
}

export default Pipa;
