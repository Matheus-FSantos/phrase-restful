import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

/* CORS */
import cors from "cors";

/* Application Routes */
import router from "./routes";

dotenv.config();

const server = express();
const PORT = process.env.PORT;
const DEFAULT_URL = "/api";

server.use(cors({
    origin: "https://resttesttest.com",
    methods: ["GET"]
}));

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({extended: true}));
server.use(DEFAULT_URL, router);

server.listen(PORT, () => { console.log(`Server on in PORT: ${ PORT } 🚀🚀🚀`); });