import axios from "axios"
import xml2js from "xml2js"
import { AllVehicle } from "../model/AllVehicle.js";
import { Vehicle } from "../model/Vehicle.js";
export const fetchData = async (makeId) => {

    const res = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/${makeId}?format=xml`)
    console.log(res.data)

    const parser = new xml2js.Parser();
    let results
    parser.parseString(res.data, (err, result) => {

        results = result.Response.Results[0].VehicleTypesForMakeIds

    });
    console.log(results)



    let vehicleTypes = []
    results.map(v => {
        let obj = new Object()

        obj["typeId"] = v["VehicleTypeId"].toString()
        obj["typeName"] = v["VehicleTypeName"].toString()

        return vehicleTypes.push(obj)
    })



    const makeNameDB = await AllVehicle.find(
        {
            'Make_ID': makeId
        }
    )

    let makeName = makeNameDB[0].Make_Name.toString()

    let resArray =

    {
        "makeId": makeId,
        "makeName": makeName,
        "vehicleTypes": []
    }


    resArray['vehicleTypes'].push(...vehicleTypes)



    const vehicle = new Vehicle(
        resArray
    );
    await vehicle.save();
    return [vehicle];
}
