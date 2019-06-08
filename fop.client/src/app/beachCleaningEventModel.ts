export class BeachCleaningEventModel {

    private beachId: string;
    private startingDate: Date;
    private durationInHours: number;
    private numberOfUsers: number;

    constructor(beachId: string, startingDate: Date, durationInHours: number, numberOfUsers: number) {
        this.beachId = beachId;
        this.startingDate = startingDate;
        this.durationInHours = durationInHours;
        this.numberOfUsers = numberOfUsers;
    }

    public static buildFromResponse(beachCleaningEvent): BeachCleaningEventModel[] {
        return beachCleaningEvent.map(beachCleanEvent => new BeachCleaningEventModel(beachCleanEvent.beachId, beachCleanEvent.startingDate, beachCleanEvent.durationInHours, beachCleanEvent.numberOfUsers));
    }

}