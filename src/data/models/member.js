import { Member } from '../schema.js';

export function getAllMembers() {
    return Member.findAll();
}

export function getMemberById(memberIdInput) {
    return Member.findByPk(memberIdInput);
}

export function getCustomerByLoginID(loginIdInput) {
    return Member.findAll({ where: { loginId: loginIdInput } });
}

export function createCustomer() {}
