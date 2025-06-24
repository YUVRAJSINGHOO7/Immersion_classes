import React, { useEffect, useState } from 'react';

function VehicleForm({ onSave, editVehicle }) {
  const [formData, setFormData] = useState({
    VehicleName: '',
    price: '',
    image: '',
    desc: '',
    brand: ''
  });

  useEffect(() => {
    if (editVehicle) {
      setFormData(editVehicle);
    }
  }, [editVehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      VehicleName: '',
      price: '',
      image: '',
      desc: '',
      brand: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editVehicle ? "Edit Vehicle" : "Add Vehicle"}</h2>
      <input name="VehicleName" placeholder="Vehicle Name" value={formData.VehicleName} onChange={handleChange} required /><br />
      <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required /><br />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} /><br />
      <input name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required /><br />
      <textarea name="desc" placeholder="Description" value={formData.desc} onChange={handleChange} /><br />
      <button type="submit">{editVehicle ? "Update" : "Create"}</button>
    </form>
  );
}

export default VehicleForm;
