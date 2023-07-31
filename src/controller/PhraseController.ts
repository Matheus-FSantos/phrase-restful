import { Request, Response } from "express";
import PhraseService from "../model/service/PhraseService";

export default class PhraseController {

    public findAll(request: Request, response: Response): void {
        let phraseServiceResponse = new PhraseService().findAll();
        
        response.status(200).json(phraseServiceResponse);
    }

    public findById(request: Request, response: Response): void {

    }

    public save(): void {
        console.log("\n\nSave method!");
    }

    public update(): void {
        console.log("\n\nUpdate method!");
    }

    public delete(): void {
        console.log("\n\nDelete method!");
    }

}