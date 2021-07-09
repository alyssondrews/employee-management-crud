import "reflect-metadata";
import {createConnection} from "typeorm";
import express = require('express');
import routes from './routes';

// import * as cors from "cors";
import {Server} from "http";

if (process.env.NODE_ENV !== "test") {
    createConnection()
        .then(async (connection) => {
            console.log(!connection.isConnected ? "Connection Failed" : "Connected");
        })
        .catch((error) => console.log(error));
}

const app = express();
// app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 8080;
if (process.env.NODE_ENV !== "test") {
    const server: Server = app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

}

export default app;


