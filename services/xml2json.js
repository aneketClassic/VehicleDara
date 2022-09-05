import axios from "axios"
import xml2js from "xml2js"
import { AllVehicle } from "../model/AllVehicle.js"
export const fetchDataandSave=async()=>{

	const res = await axios.get(
		  `https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=XML`)
		  console.log(res.data)  
	
	const parser = new xml2js.Parser();
	let results
	parser.parseString(res.data, (err, result) => {
	
	results= result.Response.Results[0].AllVehicleMakes

	
		})

		const vehicle = await AllVehicle.insertMany(
		results		   );

		   return vehicle;
		
	}
	
