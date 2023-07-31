export default class PhraseService {

    constructor() { }

    public findAll(): String[] {
        let phrases: String[] = [];

        for(let i = 0; i < 10; i++)
            phrases.push("Hello, world!");

        return phrases;
    }

}