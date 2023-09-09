import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center capitalize bg-gray-700 text-white text-3xl p-10">
      User : {userid}
    </div>
  );
}

export default User;
