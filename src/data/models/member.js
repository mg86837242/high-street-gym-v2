import { Member } from '../schema.js';

export function getAllMembers() {
    return Member.findAll();
}

export function getMemberById(idInput) {
    return Member.findByPk(idInput);
}

export function getMemberByLoginId(loginIdInput) {
    return Member.findAll({ where: { loginId: loginIdInput } });
}

export function createMember(
    loginIdInput,
    firstNameInput,
    lastNameInput,
    emailInput,
    phoneInput,
    addressIdInput,
    ageInput,
    genderInput
) {
    return Member.create({
        loginId: loginIdInput,
        firstName: firstNameInput,
        lastName: lastNameInput,
        email: emailInput,
        phone: phoneInput,
        addressId: addressIdInput,
        age: ageInput,
        gender: genderInput,
    });
}
