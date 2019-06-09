export class BeachModel {

    private id: string;
    private name: string;
    private peopleCleaningToday: number;
    private smallImageUrl: string;
    private largeImageUrl: string;

    public static  buildFromResponse(beachList) {
        return beachList.map(beach => new BeachModel(beach.id, beach.name, beach.peopleCleaningToday, beach.smallImageUrl, beach.largeImageUrl));
    }

    constructor(id, name, peopleCleningToday, smallImageUrl, largeImageUrl) {
        this.id = id;
        this.name = name;
        this.peopleCleaningToday = peopleCleningToday;
        this.smallImageUrl = smallImageUrl;
        this.largeImageUrl = largeImageUrl;
    }

    getId(): string {
        return this.id;
    }
}
