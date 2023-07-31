import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/pg";

export interface PhraseInstance extends Model {
    id: number;
    author: string;
    phrase: string;
}

export const Phrase = sequelize.define<PhraseInstance>("Phrase", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        unique: true
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    phrase: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    created_at: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
    },
    updated_at: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
    }
}, 
{
    tableName: "phrases",
    timestamps: false
});