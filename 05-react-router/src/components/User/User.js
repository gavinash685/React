import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-500 p-3 text-center text-red-300">
      User: {userId}
    </div>
  );
}
export default User;
