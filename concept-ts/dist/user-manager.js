"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserManager = /** @class */ (function () {
    function UserManager() {
        this._users = [];
    }
    Object.defineProperty(UserManager.prototype, "users", {
        get: function () {
            return this._users;
        },
        enumerable: true,
        configurable: true
    });
    UserManager.prototype.add = function (user) {
        return Promise.resolve(true);
    };
    UserManager.prototype.update = function (user) {
        return Promise.resolve(true);
    };
    UserManager.prototype.remove = function (user) {
        return Promise.resolve(true);
    };
    return UserManager;
}());
//# sourceMappingURL=user-manager.js.map