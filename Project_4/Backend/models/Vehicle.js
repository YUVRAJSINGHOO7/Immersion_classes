import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  VehicleName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  desc: { type: String },
  brand: { type: String, required: true }
}, {
  timestamps: true
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
