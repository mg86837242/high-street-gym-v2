import { Login } from '../schema.js';

export function getLoginById(loginIdInput) {
    return Login.findByPk(loginIdInput);
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

export function updateLoginById(loginIdInput, usernameInput, passwordInput) {
    return Login.update(
        {
            username: usernameInput,
            password: passwordInput,
        },
        { where: { id: loginIdInput } }
    );
}

export function deleteLoginById(loginIdInput) {
    return Login.destroy({ where: { id: loginIdInput } });
}
