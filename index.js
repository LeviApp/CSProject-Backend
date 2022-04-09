const express = require("express");
const mapRoutes = require('./route/map')
const cors = require('cors')
const server = express();
const morgan = require('morgan')
const PORT = process.env.PORT || '3000'

require('dotenv/config.js')
server.use(express.json());
server.use(cors());
server.use('/api', mapRoutes);

server.get('/', (req, res) => {
    res.send("{ message: 'api is working so far' }");
  });

server.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))
