import { Activity } from '../schema.js';

export function getAllActivities() {
    return Activity.findAll();
}

export function getActivityById(idInput) {
    return Activity.findByPk(idInput);
}
