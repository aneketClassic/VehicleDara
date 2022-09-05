Project to parse xml data to json
---------------
Steps to Run
npm install 
npm start
-------------------
This will automatically fetch All vehicle data and save to Vehicle Database in mongo DB

After then GRAPHQL endpoint
http://localhost:4000/graphql

we can send query with the make id and it will automatically fetch and combine that data with other parsed JSON and save that data in mongodb database in the below format


query-->
query Query($makeId: Int!) {
  vehicleData(makeId: $makeId) {
    makeId
    makeName
    vehicleTypes {
      typeId,
      typeName
    }
  }
}

variable -->
{
  "makeId": 440
}

response-->
{
  "data": {
    "vehicleData": [
      {
        "makeId": 440,
        "makeName": "ASTON MARTIN",
        "vehicleTypes": [
          {
            "typeId": [
              "2"
            ],
            "typeName": [
              "Passenger Car"
            ]
          },
          {
            "typeId": [
              "7"
            ],
            "typeName": [
              "Multipurpose Passenger Vehicle (MPV)"
            ]
          }
        ]
      }
    ]
  }
}