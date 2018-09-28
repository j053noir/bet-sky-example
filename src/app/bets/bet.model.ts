export class Bet {
    id: number;
    image: string;
    name: string;
    minbet: number;
    description: string;
    calification: number;
    type: string;

    constructor(id: number, image: string, name: string, minbet: number, description: string, calification: number, type: string) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.minbet = minbet;
        this.description = description;
        this.calification = calification;
        this.type = type;
    }
}
