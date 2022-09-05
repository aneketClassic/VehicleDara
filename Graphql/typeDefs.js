import { gql } from "apollo-server-express";

export const typeDefs = gql`

  type Query {
  vehicleData(makeId:Int!): [VehicleData]
  }

  type VehicleTypes {
  typeId:[String],
  typeName:[String]
  }

  type VehicleData {
    makeId: Int
    makeName:String
    vehicleTypes:[VehicleTypes]
  }

`;