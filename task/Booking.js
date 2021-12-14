import {
    Book
} from "./Book.js"
import {
    User
} from "./User.js"

import {
    subtractDates,
    checkInstance
} from "./utility.js"


class Booking {
    constructor(bookingUser) {

        checkInstance(bookingUser, User, "Invalid User.")

        this.user = bookingUser
        this.borrowDate = "" // new Date
        this.returnDate = "" // new Date + 7 dni
        this.listOfBorrowBooks = []
        this.penalty = "" // 0
    }

    subtractDates() {
        // new Date()

        return Math.abs(this.returnDate - this.borrowDate)

        // czy liczba jest na minusie
    }

    // addOrRemoveBorrowedBook(key, book) {
    //     const availableKeys = ["borrow", "return"]

    //     if (!availableKeys.includes(key) || typeof key !== "string") throw Error("Invalid key value, available keys: borrow, return")



    //     switch (key) {
    //         case "borrow":
    //             this.listOfBorrowBooks.push(book)
    //             this.borrowDate = new Date().toLocaleDateString()
    //             break;
    //         case "return":
    //             const indexOfReturningBook = this.listOfBorrowBooks.indexOf(book)
    //             this.listOfBorrowBooks.splice(indexOfReturningBook, 1)
    //             this.returnDate = new Date().toLocaleDateString()

    //             if (this.subtractDates() > 7) this.penalty = "1 zł"
    //             //jak odejmować daty metoda abs() w utility nie działa
    //             //jak zrobić logike np za każdy dzień zwłoki +1zł kary
    //             break;
    //         default:
    //             throw Error("Unknown command")
    //     }
    // }

    borrowBook(bookName) {
        checkInstance(bookName, Book, "Invalid instance of book")

        this.listOfBorrowBooks.push(bookName)
        this.borrowDate = new Date().toLocaleDateString()

    }

    returnBook(bookName) {
        checkInstance(bookName, Book, "Invalid instance of book")

        const indexOfReturningBook = this.listOfBorrowBooks.indexOf(bookName)
        this.listOfBorrowBooks.splice(indexOfReturningBook, 1)
        this.returnDate = new Date().toLocaleDateString()
    }
}

export {
    Booking
}