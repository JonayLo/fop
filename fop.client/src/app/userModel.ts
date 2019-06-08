
export class UserModel {

    private id: string;
    private firstName: string;
    private lastName: string;

    public static  buildFromResponse(user) {
        return new UserModel(user.id, user.firstName, user.lastName);
    }

    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }



}
