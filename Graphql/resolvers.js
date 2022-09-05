import {fetchData} from '../services/service.js'
export const resolvers = {
  
  Query: {
    vehicleData :async (_,{makeId}) => {
    
    return fetchData(makeId) }
  }
};