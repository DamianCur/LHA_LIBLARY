import {
    v4 as uuidv4
} from 'uuid';

import {
    stringValidation
} from "./utility.js"

class User {
    constructor(name, surname) {
        stringValidation(name)
        stringValidation(surname)

        this.name = name,
            this.surname = surname,
            this.id = uuidv4()
            //z kazdym konsole logiem zmienia się ID użytkownika chyba nie powinno tak być.
    }

}

export {User}