import { db_conn } from '../database.js';

// Create Address
export function createAddress(street_1, street_2, suburb, postcode, state, country) {
    return db_conn.query(
        `
		INSERT INTO hsg_addresses
		(street_1, street_2, suburb, postcode, state, country)
		VALUES (?, ?, ?, ?, ?, ?)
		`,
        [street_1, street_2, suburb, postcode, state, country]
    );
}

// Read Address
export function getAllAddresses() {
    return db_conn.query('SELECT * FROM hsg_addresses');
}

export function getAddressById(address_id) {
    return db_conn.query('SELECT * FROM hsg_addresses WHERE address_id = ?', [address_id]);
}

// Update Address
export function updateAddressById(address_id, street_1, street_2, suburb, postcode, state, country) {
    return db_conn.query(
        `
		UPDATE hsg_addresses
		SET street_1 = ?, street_2 = ?, suburb = ?, postcode = ?, state = ?, country = ?
		WHERE address_id = ?
		`,
        [street_1, street_2, suburb, postcode, state, country, address_id]
    );
}

// Delete Address
export function deleteAddressById(address_id) {
    return db_conn.query('DELETE FROM hsg_addresses WHERE address_id = ?', [address_id]);
}
