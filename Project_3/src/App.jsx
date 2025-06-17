import React, { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  // Fetch all products initially
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      setError("Search field cannot be empty.");
      return;
    }

    setError("");
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while searching.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product Search</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px 15px", marginLeft: "10px" }}
        >
          Search
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h4>{product.title}</h4>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
