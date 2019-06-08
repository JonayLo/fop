export class BeachModel {

    private id: string;
    private name: string;
    private peopleCleaningToday: number;

    public static  buildFromResponse(beachList) {
        return beachList.map(beach => new BeachModel(beach.id, beach.name, beach.peopleCleaningToday));
    }

    constructor(id, name, peopleCleningToday) {
        this.id = id;
        this.name = name;
        this.peopleCleaningToday = peopleCleningToday;
    }

    getId(): string {
        return this.id;
    }
}
