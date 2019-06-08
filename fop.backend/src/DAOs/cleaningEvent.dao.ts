import {CleaningEvent} from "../models/CleaningEvent";
import {mockCleaningEvents} from "../mocks/cleaningEvents";

export class CleaningEventDao {
    private static instance: CleaningEventDao;

    private constructor() {

    }

    static getInstance() {
        if (!CleaningEventDao.instance) {
            CleaningEventDao.instance = new CleaningEventDao();
        }
        return CleaningEventDao.instance;
    }

    getByUserId(userId: string): CleaningEvent[] {
        return mockCleaningEvents.filter(event => event.userId === userId);
    }

    getByBeachId(beachId: string): CleaningEvent[] {
        return mockCleaningEvents.filter(event => event.beachId === beachId);
    }
}
