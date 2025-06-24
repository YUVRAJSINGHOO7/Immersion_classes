import React from 'react';

function VehicleList({ vehicles, onEdit, onDelete }) {
  return (
    <div>
      <h2>All Vehicles</h2>
      {vehicles.length === 0 && <p>No vehicles found.</p>}
      {vehicles.map(vehicle => (
        <div key={vehicle._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h3>{vehicle.VehicleName} ({vehicle.brand})</h3>
          {vehicle.image && <img src={vehicle.image} alt={vehicle.VehicleName} width="150" />}
          <p><strong>Price:</strong> ₹{vehicle.price}</p>
          <p>{vehicle.desc}</p>
          <button onClick={() => onEdit(vehicle)}>Edit</button>
          <button onClick={() => onDelete(vehicle._id)} style={{ marginLeft: "10px", color: "red" }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default VehicleList;
