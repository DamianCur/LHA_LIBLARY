import {
    Book
} from "./Book.js"
import {
    Booking
} from "./Booking.js"
import {
    User
} from "./User.js"
import {
    checkInstance,
    checkIfKeyIsCorrect
} from "./utility.js"



class Liblary {
    constructor() {
        this.listOfBooks = []
        this.listOfAvailableBooks = []
        this.listOfBorrowedBooks = []
        this.listOfUsers = []
    }


    addBookToListofAllBooks(newAddedBook) {
        checkInstance(newAddedBook, Book, "Invalid Book")

        if (this.listOfBooks.includes(newAddedBook)) throw Error("This book is already in this list.")
        this.listOfBooks.push(newAddedBook)
    }


    addBookToSpecifiedList(listName, newAddedBook) {
        checkInstance(newAddedBook, Book, "Invalid Book")

        const aveliableLists = ["availableBooks", "borrowedBooks"]

        switch (listName) {
            case "availableBooks":
                this.listOfAvailableBooks.push(newAddedBook)
                break;
            case "borrowedBooks":
                this.listOfBorrowedBooks.push(newAddedBook)
                break;
            default:
                checkIfKeyIsCorrect(listName, aveliableLists)
        }

    }

    removeBookFromSpecifiedList(listName, bookToRemove) {
        checkInstance(bookToRemove, Book, "Invalid Book")

        const aveliableLists = ["availableBooks", "borrowedBooks"]

        if (!aveliableLists.includes(listName)) throw Error("Invalid list name.")

        switch (listName) {
            case "availableBooks":
                if (!this.listOfAvailableBooks.includes(bookToRemove)) throw Error("This book is not in the list.")

                const indexOfRemovedBook = this.listOfAvailableBooks.indexOf(bookToRemove)
                this.listOfAvailableBooks.splice(indexOfRemovedBook, 1)
                break;
            case "borrowedBooks":
                if (!this.listOfBorrowedBooks.includes(bookToRemove)) throw Error("This book is not in the list.")

                const indexOfRemovedBook = this.listOfBorrowedBooks.indexOf(bookToRemove)
                this.listOfBorrowedBooks.splice(indexOfRemovedBook, 1)
                break;
            default:
                throw Error("Invalid list name");
        }
    }
}

export default Liblary