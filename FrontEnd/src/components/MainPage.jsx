import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [gifts, setGifts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all gifts
  useEffect(() => {
    fetch("http://localhost:5000/api/gifts")
      .then((res) => res.json())
      .then((data) => {
        setGifts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching gifts:", err);
        setLoading(false);
      });
  }, []);

  // Search filter (Task 17)
  const filteredGifts = gifts.filter((gift) =>
    gift.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎁 All Gifts</h2>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search gifts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "20px"
        }}
      />

      {/* LOADING */}
      {loading && <p>Loading gifts...</p>}

      {/* NO RESULT */}
      {!loading && filteredGifts.length === 0 && (
        <p>No gifts found.</p>
      )}

      {/* GIFT LIST */}
      <div>
        {filteredGifts.map((gift) => (
          <div
            key={gift._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "5px"
            }}
          >
            <h3>{gift.name}</h3>
            <p>{gift.description}</p>
            <p><strong>Price:</strong> ₹{gift.price}</p>

            <Link to={`/gift/${gift._id}`}>
              <button style={{ padding: "5px 10px" }}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
