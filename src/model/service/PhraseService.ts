import { Identifier } from "sequelize";
import { PhraseRepository } from "../repository/PhraseRepository";
import { PhraseInstance } from "../entity/Phrase";

export default class PhraseService {

    constructor() { }

    public async findAll(): Promise<Array<PhraseInstance>> {
        return await new PhraseRepository().findAll();
    }

    public async findById(id: Identifier): Promise<PhraseInstance | null> {
        return await new PhraseRepository().findById(id);
    }

    public async save(author: String, phrase: String): Promise<void> {
        await new PhraseRepository().save(author, phrase);
    }

    public async update(id: Identifier, author: string, phrase: string): Promise<Boolean> {
        let oldPhrase = await this.findById(id);
        
        if(oldPhrase != null) {
            oldPhrase.author = author
            oldPhrase.phrase = phrase
            await new PhraseRepository().update(oldPhrase);
            return true;
        }

        return false;
    }

    public async delete(id: Identifier): Promise<Boolean> {
        if(await this.findById(id) != null) {
            await new PhraseRepository().delete(id);
            return true;
        }

        return false;
    }

}