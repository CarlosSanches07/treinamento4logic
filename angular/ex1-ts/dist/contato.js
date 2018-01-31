"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contato = /** @class */ (function () {
    function Contato(name, email, birth, gender, favorite) {
        this._name = name;
        this._email = email;
        this._birth = birth;
        this._gender = gender;
        this._isFavorite = favorite;
    }
    Object.defineProperty(Contato.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contato.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contato.prototype, "birth", {
        get: function () {
            return this._birth;
        },
        set: function (birth) {
            this._birth = birth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contato.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contato.prototype, "isFavorite", {
        get: function () {
            return this._isFavorite;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contato.prototype, "isFavorit", {
        set: function (favorite) {
            this._isFavorite = favorite;
        },
        enumerable: true,
        configurable: true
    });
    Contato.prototype.getAge = function () {
        return ((new Date().getFullYear()) - (this._birth.getFullYear()));
    };
    return Contato;
}());
exports.Contato = Contato;
