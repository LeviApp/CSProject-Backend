import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from "express";
import router from "./route/map.js";
import cors from "cors";
import morgan from "morgan";

const server = express();
const PORT = process.env.PORT || '3000'

server.use(morgan("tiny"))
server.use(express.json());
server.use(cors());
server.use('/api', router);

server.get('/', (req, res) => {
    res.send("{ message: 'api is working so far' }");
  });

  
server.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))
