import {Beach} from "../models/Beach";
import {CleaningEvent} from "../models/CleaningEvent";

export interface UserCleaningEvent {
    id: string;
    userId: string;
    beach: Beach
    startingDate: Date;
    durationInHours: number;
}

export const toUserCleaningEvent = (
    beaches: Beach[],
    cleaningEvent: CleaningEvent
): UserCleaningEvent => {
    const beach = beaches.find(beach => beach.id === cleaningEvent.beachId);
    if(!beach) {
        throw new Error('Beach not found');
    }
    return {
        id: cleaningEvent.id,
        userId: cleaningEvent.userId,
        beach,
        startingDate: cleaningEvent.startingDate,
        durationInHours: cleaningEvent.durationInHours
    }
}
