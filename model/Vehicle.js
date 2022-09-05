import mongoose from 'mongoose';

const VehicleTypes = 
{
    typeId: [String],
    typeName : [String]
 };

const VehicleData = new mongoose.Schema( 
{
    makeId: Number,
    makeName : String,
    vehicleTypes: [VehicleTypes]
 });

 export const Vehicle=mongoose.model("VehicleData",VehicleData) 


