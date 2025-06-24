import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VehicleForm from './components/VehicleForm';
import VehicleList from './components/VehicleList';

const API_URL = 'http://localhost:5000/api/vehicles';

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [editVehicle, setEditVehicle] = useState(null);

  // Fetch vehicles
  const fetchVehicles = async () => {
    const res = await axios.get(API_URL);
    setVehicles(res.data);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  // Create or update
  const handleSave = async (vehicleData) => {
    if (editVehicle) {
      await axios.put(`${API_URL}/${editVehicle._id}`, vehicleData);
    } else {
      await axios.post(API_URL, vehicleData);
    }
    setEditVehicle(null);
    fetchVehicles();
  };

  const handleEdit = (vehicle) => {
    setEditVehicle(vehicle);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchVehicles();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Vehicle Manager</h1>
      <VehicleForm onSave={handleSave} editVehicle={editVehicle} />
      <hr />
      <VehicleList vehicles={vehicles} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
