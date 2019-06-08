import {CleaningEvent} from "../models/CleaningEvent";

export interface BeachCleaningEvent {
    beachId: string;
    startingDate: Date;
    durationInHours: number;
    numberOfUsers: number;
}

export const toBeachCleaningEvent = (cleaningEvent: CleaningEvent): BeachCleaningEvent => {
    return {
        beachId: cleaningEvent.beachId,
        numberOfUsers: 1,
        durationInHours: cleaningEvent.durationInHours,
        startingDate: cleaningEvent.startingDate
    }
}
