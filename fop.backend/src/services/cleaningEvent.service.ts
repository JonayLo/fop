import {toUserCleaningEvent, UserCleaningEvent} from "../DTOs/UserCleaningEvent";
import {BeachCleaningEvent, toBeachCleaningEvent} from "../DTOs/BeachCleaningEvent";
import {CleaningEventDao} from "../DAOs/cleaningEvent.dao";
import {BeachDao} from "../DAOs/beach.dao";
import {CleaningEvent} from "../models/CleaningEvent";

export class CleaningEventService {
    private static instance: CleaningEventService;

    private constructor() {

    }

    static getInstance() {
        if (!CleaningEventService.instance) {
            CleaningEventService.instance = new CleaningEventService();
        }
        return CleaningEventService.instance;
    }

    getUserCleaningEvents(userId: string): UserCleaningEvent[] {
        const cleaningEvents = CleaningEventDao.getInstance().getByUserId(userId)
        const beaches = BeachDao.getInstance().getAll()
        return cleaningEvents.map(toUserCleaningEvent.bind(null, beaches))
    }

    getBeachCleaningEvents(beachId: string): BeachCleaningEvent[] {
        const cleaningEvents = CleaningEventDao.getInstance().getByBeachId(beachId)
        return cleaningEvents.reduce((acc: BeachCleaningEvent[], current: CleaningEvent) => {
            const existing: BeachCleaningEvent | undefined = acc.find(
                event => event.beachId === current.beachId && event.startingDate.toString() === current.startingDate.toString()
            )

            if (existing) {
                existing.numberOfUsers++;
            } else {
                acc.push(toBeachCleaningEvent(current))
            }

            return acc
        }, []);
    }
}
