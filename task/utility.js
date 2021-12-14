import {
    arrOfBooksData
} from './bookDescriptionData.js';


const stringValidation = (validatedString) => {
    if (typeof validatedString !== "string" || validatedString.length < 2) throw Error("Data have to be a string.")
}

const numberValidation = (validatedNumber) => {
    if (!isFinite(validatedNumber)) throw Error("Data have to be a number.")
}

const randomNumberInRange = (min, max) => {
    numberValidation(min)
    numberValidation(max)

    return Math.floor(Math.random() * (max - min) + min

    )
}

const checkInstance = (instance, className, errorText) => {
    if (!instance instanceof className) throw Error(errorText);
}

// const subtractDates = () => {
//     return Math.abs()
// }

const randomBookDescription = () => {
    const randomNumber = randomNumberInRange(0, arrOfBooksData.length)
    return arrOfBooksData[randomNumber]
}

export {
    stringValidation,
    numberValidation,
    randomBookDescription,
    // subtractDates,
    checkInstance
}