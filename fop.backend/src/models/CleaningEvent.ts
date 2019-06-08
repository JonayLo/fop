export interface CleaningEvent {
    id: string;
    userId: string;
    beachId: string;
    startingDate: Date;
    durationInHours: number;
}