export interface BookData {
    url: string;	
    name: string;	
    isbn: string;	
    authors: string[];	
    numberOfPages: number;
    publiser: string;	
    country: string;	
    mediaType: string;	
    released: Date;	
    characters: string[];	
    povCharacters: string[];	
}

class Book implements BookData {
    url: string;	
    name: string;	
    isbn: string;	
    authors: string[];	
    numberOfPages:number;
    publiser:	string;	
    country:	string;	
    mediaType:	string;	
    released:	Date;	
    characters:	string[];	
    povCharacters:	string[];
    
    constructor(data: BookData) {
        this.url = data.url;	
        this.name = data.name;	
        this.isbn = data.isbn;	
        this.authors = data.authors;	
        this.numberOfPages = data.numberOfPages;
        this.publiser =	data.publiser;	
        this.country = data.country;	
        this.mediaType = data.mediaType;	
        this.released =	data.released;	
        this.characters = data.characters;	
        this.povCharacters = data.povCharacters;
    }
}

export default Book;