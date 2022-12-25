import { Booking } from '../schema.js';

export function getAllBookings() {
    return Booking.findAll();
}

export function getBookingById(idInput) {
    return Booking.findByPk(idInput);
}
