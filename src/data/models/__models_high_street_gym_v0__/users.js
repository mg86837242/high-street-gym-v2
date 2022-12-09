import { db_conn } from '../database.js';

// Create User
export function createUser(first_name, last_name, role, email, phone, username, password, address_id) {
	return db_conn.query(
		`
		INSERT INTO hsg_users (first_name, last_name, role, email, phone, username, password, address_id)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?)
		`,
		[first_name, last_name, role, email, phone, username, password, address_id]
	);
}

// Read User
export function getAllUsers() {
	return db_conn.query('SELECT * FROM hsg_users');
}

export function getUserById(user_id) {
	return db_conn.query('SELECT * FROM hsg_users WHERE user_id = ?', [user_id]);
}

export function getUserByUsername(username) {
	return db_conn.query('SELECT * FROM hsg_users WHERE username = ?', [username]);
}

// Update User
export function updateUserById(user_id, first_name, last_name, role, email, phone, username, password, address_id) {
	return db_conn.query(
		`
		UPDATE hsg_users
		SET first_name = ?, last_name = ?, role = ?, email = ?, phone = ?, username = ?, password = ?, address_id = ?
		WHERE user_id = ?
		`,
		[first_name, last_name, role, email, phone, username, password, address_id, user_id]
	);
}

// Delete User
export function deleteUserById(user_id) {
	return db_conn.query('DELETE FROM hsg_users WHERE user_id = ?', [user_id]);
}
