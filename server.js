import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import {resolvers} from './Graphql/resolvers.js'
import {typeDefs} from './Graphql/typeDefs.js'
import { fetchDataandSave } from "./services/xml2json.js";



const startServer = async () => {
    const app = express();
  
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await server.start()
  
    server.applyMiddleware({ app });
  
    await mongoose.connect("mongodb://localhost:27017/Vehicle", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  
    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  };

  startServer();
fetchDataandSave()
