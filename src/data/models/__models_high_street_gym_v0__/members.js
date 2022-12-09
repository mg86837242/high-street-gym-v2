import { db_conn } from '../database.js';

// Create Member
export function createMember(member_user_id, age, gender) {
	return db_conn.query(
		`
		INSERT INTO hsg_member_sp_traits (member_user_id, age, gender)
		VALUES (?, ?, ?)
		`,
		[member_user_id, age, gender]
	);
}

// Read Member
export function getAllMembers() {
	return db_conn.query(
		`
        SELECT * 
        FROM hsg_member_sp_traits
        INNER JOIN hsg_users ON hsg_member_sp_traits.member_user_id = hsg_users.user_id
    	`
	);
}

export function getMemberById(member_id) {
	return db_conn.query(
		`
        SELECT * 
        FROM hsg_member_sp_traits
        INNER JOIN hsg_users ON hsg_member_sp_traits.member_user_id = hsg_users.user_id
        WHERE member_id = ?
    	`,
		[member_id]
	);
}

// Update Member
export function updateMemberById(member_id, member_user_id, age, gender) {
	return db_conn.query(
		`
		UPDATE hsg_member_sp_traits
		SET member_user_id = ?, age = ?, gender = ?
		WHERE member_id = ?
		`,
		[member_user_id, age, gender, member_id]
	);
}

// Delete Member
export function deleteMemberById(member_id) {
	return db_conn.query('DELETE FROM hsg_member_sp_traits WHERE member_id = ?', [member_id]);
}
