import {
    User
} from "./task/User.js";

import {
    Book
} from "./task/Book.js";

import {
    Booking
} from "./task/Booking.js";

const damian = new User("Damian", "Cur")
const alchemik = new Book("Alchemik", "Paullo Coello", 1)
const bookingDamian = new Booking(damian)

console.log(bookingDamian);

// var result = new Date();
// result.setDate(result.getDate() + -7);
// console.log(result);