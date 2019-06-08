export class LoggedUserModel {

    private id: string;
    private name: string;
    private peopleCleaningToday: number;

    constructor(id: string, name: string, peopleCleaningToday: number) {
        this.id = id;
        this.name = name;
        this.peopleCleaningToday = peopleCleaningToday;
    }

    public static buildFromResponse(userLogged): LoggedUserModel {
        return new LoggedUserModel(userLogged.id, userLogged.name, userLogged.peopleCleaningToday);
    }


}
