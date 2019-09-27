import { MSUser } from "./ms-user";

class UserManager {
    private _users: MSUser[] = [];

    public get users() {
        return this._users;
    }

    public add(user):Promise<boolean> {
        return  Promise.resolve(true);
    }

    public update(user):Promise<boolean> {
        return  Promise.resolve(true);
    }

    public remove(user):Promise<boolean> {
        return  Promise.resolve(true);
    }
}