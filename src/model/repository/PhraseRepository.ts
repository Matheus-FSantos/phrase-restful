import { Identifier } from "sequelize";
import { Phrase, PhraseInstance } from "../entity/Phrase";

export class PhraseRepository {

    public async findAll() {
        return await Phrase.findAll();
    }

    public async findById(id: Identifier) {
        return await Phrase.findByPk(id);
    }

    public async save(author: String, phrase: String) {
        await Phrase.create({ author, phrase });
    }

    public async update(phrase: PhraseInstance) {
        await phrase.save();
    }

    public async delete(id: Identifier) {
        return await Phrase.destroy(
            {
                where: { id }
            }
        );
    }

}