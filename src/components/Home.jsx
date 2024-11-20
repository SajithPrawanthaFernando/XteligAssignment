import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState([]); // Original data from API
  const [filteredData, setFilteredData] = useState([]); // Data displayed after filtering
  const [searchTerm, setSearchTerm] = useState(""); // Search input
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForUsers = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users`);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let UsersData = await response.json();
        setData(UsersData.data); // Store original data
        setFilteredData(UsersData.data); // Initialize filtered data
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
        setFilteredData([]);
      }
    };

    fetchDataForUsers();
  }, []);

  // Function to handle search input
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(term) ||
        user.last_name.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="pl-10 pr-10 pb-6 pt-8 max-w-screen-xl mx-auto">
      <div className="text-center font-bold text-4xl text-blue-600">
        Users {""}
        <span className="text-center font-bold text-4xl text-blue-950">
          List
        </span>
      </div>

      {/* Search Input with Icon */}
      <div className="flex justify-center mt-6 mb-8">
        <div className="relative w-full md:w-1/2">
          <FiSearch
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : filteredData.length > 0 ? (
          filteredData.map((result) => {
            return <Card key={result.id} data={result} />;
          })
        ) : (
          <div>No users found.</div>
        )}
      </div>
    </div>
  );
};

export default Home;
