import { Address } from '../schema.js';

export function getAllAddreses() {
    return Address.findAll();
}

export function getAddressById(idInput) {
    return Address.findByPk(idInput);
}
