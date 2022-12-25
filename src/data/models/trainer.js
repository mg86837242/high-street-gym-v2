import { Trainer } from '../schema.js';

export function getAllTrainers() {
    return Trainer.findAll();
}

export function getTrainerById(idInput) {
    return Trainer.findByPk(idInput);
}

export function getTrainerByLoginId(loginIdInput) {
    return Trainer.findAll({ where: { loginId: loginIdInput } });
}
