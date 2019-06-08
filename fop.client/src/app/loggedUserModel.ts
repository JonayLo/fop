export class LoggedUserModel {

    private _id: string;
    private _name: string;
    private _peopleCleaningToday: number;

    constructor() {
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get peopleCleaningToday(): number {
        return this._peopleCleaningToday;
    }

    set peopleCleaningToday(value: number) {
        this._peopleCleaningToday = value;
    }
}
