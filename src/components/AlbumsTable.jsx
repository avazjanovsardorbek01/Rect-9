import React, { useEffect, useState } from "react";
import axios from "axios";

const AlbumsTable = ({ searchTerm }) => {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setAlbums(response.data);
        setFilteredAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums: ", error);
      });
  }, []);

  useEffect(() => {
    setFilteredAlbums(
      albums.filter((album) =>
        album.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, albums]);

  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Albums Table</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredAlbums.map((album) => (
            <tr key={album.id}>
              <td className="px-4 py-2 border">{album.id}</td>
              <td className="px-4 py-2 border">{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumsTable;
