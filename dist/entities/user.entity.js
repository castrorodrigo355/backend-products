"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor({ name, email, age }) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
