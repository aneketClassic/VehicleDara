import mongoose from 'mongoose';

const AllVehicleData =new  mongoose.Schema( 
{
    Make_ID: [String],
    Make_Name : [String]
 });

 export const AllVehicle=mongoose.model("AllVehicleData",AllVehicleData)

