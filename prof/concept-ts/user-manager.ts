import { MSUser } from "./ms-user";

class UserManager {
    private _users:MSUser[] = [];

    public get users(): MSUser[]{
        return this._users.filter(user => user.id != 1);
    }

    public add(user):Promise<boolean>{
        return Promise.resolve(true);
    }

    public remove(user):Promise<boolean>{
        return Promise.resolve(true);
    }

    public update(user,modification):Promise<boolean>{
        return Promise.resolve(true);
    }
}