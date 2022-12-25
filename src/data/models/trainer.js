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

export function createTrainer(
    loginIdInput,
    firstNameInput,
    lastNameInput,
    emailInput,
    phoneInput,
    addressIdInput,
    descriptionInput,
    certificateInput,
    specialtyInput,
    imageUrlInput,
    gymBranchInput
) {
    return Trainer.create({
        loginId: loginIdInput,
        firstName: firstNameInput,
        lastName: lastNameInput,
        email: emailInput,
        phone: phoneInput,
        addressId: addressIdInput,
        description: descriptionInput,
        certificate: certificateInput,
        specialty: specialtyInput,
        imageUrl: imageUrlInput,
        gymBranch: gymBranchInput,
    });
}
