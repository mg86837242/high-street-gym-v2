import { db_conn } from '../../database_high_street_gym_v0.js';

// Create Activity
export function createActivity(
	name,
	category,
	description,
	intensity_level,
	max_ppl_allowed,
	requirement_1,
	requirement_2,
	price,
	duration_minutes
) {
	return db_conn.query(
		`
        INSERT INTO hsg_activities
        (name, category, description, intensity_level, max_ppl_allowed, requirement_1, requirement_2, price, duration_minutes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
		[
			name,
			category,
			description,
			intensity_level,
			max_ppl_allowed,
			requirement_1,
			requirement_2,
			price,
			duration_minutes,
		]
	);
}

// Read Activity
export function getAllActivities() {
	return db_conn.query('SELECT * FROM hsg_activities');
}

export function getActivityById(activity_id) {
	return db_conn.query('SELECT * FROM hsg_activities WHERE activity_id = ?', [activity_id]);
}

// Update Activity
export function updateActivityById(
	activity_id,
	name,
	category,
	description,
	intensity_level,
	max_ppl_allowed,
	requirement_1,
	requirement_2,
	price,
	duration_minutes
) {
	return db_conn.query(
		`
        UPDATE hsg_activities
        SET name = ?, category = ?, description = ?, intensity_level = ?, max_ppl_allowed = ?, requirement_1 = ?, requirement_2 = ?, price = ?, duration_minutes = ?
        WHERE activity_id = ?
        `,
		[
			name,
			category,
			description,
			intensity_level,
			max_ppl_allowed,
			requirement_1,
			requirement_2,
			price,
			duration_minutes,
			activity_id,
		]
	);
}

// Delete Activity
export function deleteActivityById(activity_id) {
	return db_conn.query('DELETE FROM hsg_activities WHERE activity_id = ?', [activity_id]);
}
