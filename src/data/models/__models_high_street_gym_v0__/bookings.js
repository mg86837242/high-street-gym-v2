import { db_conn } from '../database.js';

// Create Booking
export function createBooking(session_id, member_id) {
    return db_conn.query(
        `
        INSERT INTO hsg_bookings (session_id, member_id)
        VALUES (?, ?)
        `,
        [session_id, member_id]
    );
}

// Read Booking
export function getAllBookings() {
    return db_conn.query(
        `
        SELECT * 
        FROM hsg_bookings
        INNER JOIN hsg_sessions ON hsg_bookings.session_id = hsg_sessions.session_id
        INNER JOIN hsg_activities ON hsg_sessions.activity_id = hsg_activities.activity_id
        INNER JOIN hsg_hsg_gyms_trainers ON hsg_sessions.gym_trainer_id = hsg_hsg_gyms_trainers.gym_trainer_id
        INNER JOIN hsg_gyms ON hsg_hsg_gyms_trainers.gym_id = hsg_gyms.gym_id
        INNER JOIN hsg_trainer_sp_traits ON hsg_hsg_gyms_trainers.trainer_id = hsg_trainer_sp_traits.trainer_id
        INNER JOIN hsg_users ON hsg_trainer_sp_traits.trainer_user_id = hsg_users.user_id
        INNER JOIN hsg_member_sp_traits ON hsg_bookings.member_id = hsg_member_sp_traits.member_id
        INNER JOIN hsg_users ON hsg_member_sp_traits.member_user_id = hsg_users.user_id
        `
    );
}

export function getBookingByBookingId(booking_id) {
    return db_conn.query(
        `
        SELECT * 
        FROM hsg_bookings
        INNER JOIN hsg_sessions ON hsg_bookings.session_id = hsg_sessions.session_id
        INNER JOIN hsg_activities ON hsg_sessions.activity_id = hsg_activities.activity_id
        INNER JOIN hsg_hsg_gyms_trainers ON hsg_sessions.gym_trainer_id = hsg_hsg_gyms_trainers.gym_trainer_id
        INNER JOIN hsg_gyms ON hsg_hsg_gyms_trainers.gym_id = hsg_gyms.gym_id
        INNER JOIN hsg_trainer_sp_traits ON hsg_hsg_gyms_trainers.trainer_id = hsg_trainer_sp_traits.trainer_id
        INNER JOIN hsg_users ON hsg_trainer_sp_traits.trainer_user_id = hsg_users.user_id
        INNER JOIN hsg_member_sp_traits ON hsg_bookings.member_id = hsg_member_sp_traits.member_id
        INNER JOIN hsg_users ON hsg_member_sp_traits.member_user_id = hsg_users.user_id
        WHERE booking_id = ?
        `,
        [booking_id]
    );
}

// Update Booking
export function updateBookingById(booking_id, session_id, member_id) {
    return db_conn.query(
        `
        UPDATE hsg_bookings
        SET session_id = ?, member_id = ?
        WHERE booking_id = ?
        `,
        [session_id, member_id, booking_id]
    );
}

// Delete Booking
export function deleteBookingById(booking_id) {
    return db_conn.query('DELETE FROM hsg_bookings WHERE booking_id = ?', [booking_id]);
}
