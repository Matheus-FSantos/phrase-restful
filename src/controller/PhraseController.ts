import { Request, Response } from "express";
import PhraseService from "../model/service/PhraseService";
import { PhraseInstance } from "../model/entity/Phrase";

export default class PhraseController {

    public async findAll(request: Request, response: Response) {
        let phrases: Array<PhraseInstance> = await new PhraseService().findAll();

        if(phrases.length === 0)
            return response.status(404).json();

        response.status(200).json(phrases);
    }

    public async findById(request: Request, response: Response) {
        let phrase: PhraseInstance | null = await new PhraseService().findById(request.params.id);

        if(phrase === null)
            return response.status(400).json({
                error: "Phrase not found in database!",
                service: "Phrase service",
                date: Date()
            });
        
        response.status(200).json(phrase);
    }

    public async save(request: Request, response: Response) {
        let { author, phrase } = request.body;
        await new PhraseService().save(author, phrase);
        response.status(201).send();
    }

    public async update(request: Request, response: Response) {
        let { author, phrase } = request.body;
        console.log(request.body);
        let { id } = request.params;
        
        let isUpdated = await new PhraseService().update(id, author, phrase);
        
        if(!isUpdated)
            return response.status(400).json({
                error: "Phrase not found in database!",
                service: "Phrase service",
                date: Date()
            });
        
        response.status(204).send();
    }

    public async delete(request: Request, response: Response) {
        let isDeleted: Boolean = await new PhraseService().delete(request.params.id);

        if(!isDeleted)
            return response.status(400).json({
                error: "Phrase not found in database!",
                service: "Phrase service",
                date: Date()
            });

        response.status(204).send();
    }

}