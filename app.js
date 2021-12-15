import {
    User
} from "./task/User.js";

import {
    Book
} from "./task/Book.js";

import {
    Booking
} from "./task/Booking.js";

import Liblary from "./task/Library.js";

const damian = new User("Damian", "Cur")
const alchemik = new Book("Alchemik", "Paullo Coello", 1)
const bookingDamian = new Booking(damian)
// console.log(new Date().getTime() + 86400000 * 7);
bookingDamian.returnBook(alchemik)