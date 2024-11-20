import React from "react";

const Card = ({ data }) => {
  return (
    <div className="group relative w-[90%] h-full p-6 mb-4 bg-white border rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <img
        src={data.avatar}
        alt="User Avatar"
        className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110 "
      />
      <h2 className="text-xl font-bold text-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-105">
        {data.first_name} {data.last_name}
      </h2>
      <p className="text-gray-500 transition-transform duration-300 ease-in-out transform hover:scale-105">
        {data.email}
      </p>
    </div>
  );
};

export default Card;
