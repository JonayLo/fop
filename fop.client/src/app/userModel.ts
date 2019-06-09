export class UserModel {
    private id: string;
    private firstName: string;
    private lastName: string;
    private avatarUrl: string;

    public static  buildFromResponse(user) {
        return new UserModel(user.id, user.firstName, user.lastName, user.avatarUrl);
    }

    constructor(id, firstName, lastName, avatarUrl) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatarUrl = avatarUrl;
    }
}
