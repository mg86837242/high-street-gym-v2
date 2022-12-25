import { Session } from '../schema.js';

export default function getAllSessions() {
    return Session.findAll();
}
