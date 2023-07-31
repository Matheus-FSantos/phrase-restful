import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.POSTGRE_DATABASE as string,
    process.env.POSTGRE_USER as string,
    process.env.POSTGRE_PASSWORD as string,
    {
        dialect: "postgres",
        port: parseInt(process.env.POSTGRE_PORT as string)
    }
);