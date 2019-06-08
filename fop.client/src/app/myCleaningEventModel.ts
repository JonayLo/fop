import {BeachModel} from './beachModel';

export class MyCleaningEventModel {

    private id: string;
    private userId: string;
    private beach: BeachModel;
    private startingDate: string;
    private durationInHours: number;

    constructor(id: string, userId: string, beach: BeachModel, startingDate: string, durationInHours: number) {
        this.id = id;
        this.userId = userId;
        this.beach = beach;
        this.startingDate = startingDate;
        this.durationInHours = durationInHours;
    }

    public static buildFromResponse(myEventsList): MyCleaningEventModel[] {
        return myEventsList.map(beachCleanEvent => new MyCleaningEventModel(beachCleanEvent.id, beachCleanEvent.userId, beachCleanEvent.beach, beachCleanEvent.startingDate, beachCleanEvent.durationInHours));
    }

}