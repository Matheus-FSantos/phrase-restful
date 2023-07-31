import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const server = express();
const PORT = process.env.PORT;

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({extended: true}));

server.use("/", (request: Request, response: Response) => {
    response.status(200).json(
        {
            message: "Hello, world!"
        }
    );
});

server.listen(PORT, () => { console.log(`Server on in PORT: ${ PORT } 🚀🚀🚀`); });