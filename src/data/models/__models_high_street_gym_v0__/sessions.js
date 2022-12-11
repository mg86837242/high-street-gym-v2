import { db_conn } from '../database.js';

// Create Session
export function createSession(gym_trainer_id, activity_id, booking_date_time, room_number) {
    return db_conn.query(
        `
		INSERT INTO hg_sessions (gym_trainer_id, activity_id, booking_date_time, room_number)
		VALUES (?, ?, ?, ?)
		`,
        [gym_trainer_id, activity_id, booking_date_time, room_number]
    );
}

// Read Session
export function getAllSessions() {
    return db_conn.query(
        `
        SELECT * 
        FROM hg_sessions
        INNER JOIN hsg_activities ON hg_sessions.activity_id = hsg_activities.activity_id
        INNER JOIN hsg_gyms_trainers ON hg_sessions.gym_trainer_id = hsg_gyms_trainers.gym_trainer_id
        INNER JOIN hsg_gyms ON hsg_gyms_trainers.gym_id = hsg_gyms.gym_id
        INNER JOIN hsg_trainer_sp_traits ON hsg_gyms_trainers.trainer_id = hsg_trainer_sp_traits.trainer_id
        INNER JOIN hsg_users ON hsg_trainer_sp_traits.trainer_user_id = hsg_users.user_id
        INNER JOIN hsg_member_sp_traits ON member_activity_bookings.member_id = hsg_member_sp_traits.member_id
        INNER JOIN hsg_users ON hsg_member_sp_traits.member_user_id = hsg_users.user_id
    	`
    );
}

export function getSessionBySessionId(session_id) {
    return db_conn.query(
        `
        SELECT * 
        FROM hg_sessions
        INNER JOIN hsg_activities ON hg_sessions.activity_id = hsg_activities.activity_id
        INNER JOIN hsg_gyms_trainers ON hg_sessions.gym_trainer_id = hsg_gyms_trainers.gym_trainer_id
        INNER JOIN hsg_gyms ON hsg_gyms_trainers.gym_id = hsg_gyms.gym_id
        INNER JOIN hsg_trainer_sp_traits ON hsg_gyms_trainers.trainer_id = hsg_trainer_sp_traits.trainer_id
        INNER JOIN hsg_users ON hsg_trainer_sp_traits.trainer_user_id = hsg_users.user_id
        INNER JOIN hsg_member_sp_traits ON member_activity_bookings.member_id = hsg_member_sp_traits.member_id
        INNER JOIN hsg_users ON hsg_member_sp_traits.member_user_id = hsg_users.user_id
        WHERE session_id = ?
	    `,
        [session_id]
    );
}

// Update Session
export function updateSessionById(session_id, gym_trainer_id, activity_id, booking_date_time, room_number) {
    return db_conn.query(
        `
		UPDATE hg_sessions
		SET gym_trainer_id = ?, activity_id = ?, booking_date_time = ?, room_number = ?
		WHERE session_id = ?
		`,
        [gym_trainer_id, activity_id, booking_date_time, room_number, session_id]
    );
}

// Delete Session
export function deleteSessionById(session_id) {
    return db_conn.query('DELETE FROM hg_sessions WHERE booking_id = ?', [session_id]);
}
