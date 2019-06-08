export class LoggedUserModel {

    private id: string;
    private name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public static buildFromResponse(userLogged): LoggedUserModel {
        return new LoggedUserModel(userLogged.id, userLogged.name);
    }

    getId(): string {
        return this.id;
    }
}
