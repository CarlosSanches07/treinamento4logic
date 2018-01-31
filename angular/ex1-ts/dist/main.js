"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contato_1 = require("./contato");
var gender_enum_1 = require("./gender.enum");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var contato = new contato_1.Contato('John Doe', 'jhon@mail.com', new Date(1994, 7, 7), gender_enum_1.Gender.Male, true);
        console.log("Contact: " + contato.name + ", Age: " + contato.getAge());
    };
    return Main;
}());
Main.main();
