import { Login } from '../schema.js';

export function getAllLogins() {
    return Login.findAll();
}

export function getLoginById(idInput) {
    return Login.findByPk(idInput);
}

export function getLoginByUsername(usernameInput) {
    return Login.findAll({ where: { username: usernameInput } });
}

export function createLogin(usernameInput, passwordInput) {
    return Login.create({
        username: usernameInput,
        password: passwordInput,
    });
}

export function updateLoginById(idInput, usernameInput, passwordInput) {
    return Login.update(
        {
            username: usernameInput,
            password: passwordInput,
        },
        { where: { id: idInput } }
    );
}

export function deleteLoginById(idInput) {
    return Login.destroy({ where: { id: idInput } });
}
