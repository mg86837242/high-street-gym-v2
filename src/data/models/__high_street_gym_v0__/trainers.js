import { db_conn } from '../database.js';

// Create Trainer
export function createTrainer(trainer_user_id, certificate, specialty, description) {
    return db_conn.query(
        `
		INSERT INTO hsg_trainer_sp_traits (trainer_user_id, certificate, specialty, description)
		VALUES (?, ?, ?)
		`,
        [trainer_user_id, certificate, specialty, description]
    );
}

// Read Trainer
export function getAllTrainers() {
    return db_conn.query(
        `
        SELECT * 
        FROM hsg_trainer_sp_traits
        INNER JOIN hsg_users ON hsg_trainer_sp_traits.trainer_user_id = hsg_users.user_id
    	`
    );
}

export function getTrainerById(trainer_id) {
    return db_conn.query(
        `
        SELECT * 
        FROM hsg_trainer_sp_traits
        INNER JOIN hsg_users ON hsg_trainer_sp_traits.trainer_user_id = hsg_users.user_id
        WHERE trainer_id = ?
    	`,
        [trainer_id]
    );
}

// Update Trainer
export function updateTrainerById(trainer_id, trainer_user_id, certificate, specialty, description) {
    return db_conn.query(
        `
		UPDATE hsg_trainer_sp_traits
		SET trainer_user_id = ?, certificate = ?, specialty = ?, description = ?
		WHERE trainer_id = ?
		`,
        [trainer_user_id, certificate, specialty, description, trainer_id]
    );
}

// Delete Trainer
export function deleteTrainerById(trainer_id) {
    return db_conn.query('DELETE FROM hsg_trainer_sp_traits WHERE trainer_id = ?', [trainer_id]);
}
