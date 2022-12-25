import { Member } from '../schema.js';

export function getAllMembers() {
    return Member.findAll();
}

export function getMemberById(memberId) {
    return Member.findByPk(memberId);
}

// export function getLoginByUsername(loginUsername) {
//     return Login.findAll({ where: { username: loginUsername } });
// }

// export function createLogin(loginUsername, loginPassword) {
//     return Login.create({
//         username: loginUsername,
//         password: loginPassword,
//     });
// }

// export function updateLoginById(loginId, loginUsername, loginPassword) {
//     return Login.update(
//         {
//             username: loginUsername,
//             password: loginPassword,
//         },
//         { where: { id: loginId } }
//     );
// }

// export function deleteLoginById(loginId) {
//     return Login.destroy({ where: { id: loginId } });
// }
