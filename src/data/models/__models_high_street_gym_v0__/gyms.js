import { db_conn } from '../database.js';

// Create Gym
export function createGym(name, address_id, manager_user_id) {
	return db_conn.query(
		`
		INSERT INTO hsg_gyms (name, address_id, manager_user_id)
		VALUES (?, ?, ?)
		`,
		[name, address_id, manager_user_id]
	);
}

// Read Gym
export function getAllGyms() {
	return db_conn.query('SELECT * FROM hsg_gyms');
}

export function getGymById(gym_id) {
	return db_conn.query('SELECT * FROM hsg_gyms WHERE gym_id = ?', [gym_id]);
}

// Update Gym
export function updateGymById(gym_id, name, address_id, manager_user_id) {
	return db_conn.query(
		`
		UPDATE hsg_gyms
		SET name = ?, address_id = ?, manager_user_id = ?
		WHERE gym_id = ?
		`,
		[name, address_id, manager_user_id, gym_id]
	);
}

// Delete Gym
export function deleteGymById(gym_id) {
	return db_conn.query('DELETE FROM hsg_gyms WHERE gym_id = ?', [gym_id]);
}
