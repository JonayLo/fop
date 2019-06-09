export class BeachModel {

    private id: string;
    private name: string;
    private peopleCleaningToday: number;
    private smallImageUrl: string;

    public static  buildFromResponse(beachList) {
        return beachList.map(beach => new BeachModel(beach.id, beach.name, beach.peopleCleaningToday, beach.smallImageUrl));
    }

    constructor(id, name, peopleCleningToday, smallImageUrl) {
        this.id = id;
        this.name = name;
        this.peopleCleaningToday = peopleCleningToday;
        this.smallImageUrl = smallImageUrl;
    }

    getId(): string {
        return this.id;
    }
}
