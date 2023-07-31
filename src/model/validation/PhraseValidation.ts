export class PhraseValidation {

    public validation(author: String, phrase: String) {
        this.authorValidation(author);
        this.phraseValidation(phrase);
    }

    public authorValidation(author: String) {
        if(author === null)
            throw new Error("The Author name is required!");
        else if(author.length < 4 || author.length >= 46)
            throw new Error("The Author name must be between 4 and 45 characters long!");
        else if(!this.regexAuthor(author))
            throw new Error("The Author is invalid!");
    }

    public phraseValidation(phrase: String) {
        if(phrase === null)
            throw new Error("The Phrase is required!");
        else if(phrase.length < 4 || phrase.length >= 256)
            throw new Error("The Phrase content must be between 4 and 255 characters long!");
    }

    private regexAuthor(author: String){
        return !!author.match(/[A-Z][a-z]* [A-Z][a-z]*/);
    }
        

}