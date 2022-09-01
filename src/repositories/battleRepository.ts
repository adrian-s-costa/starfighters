import connection from '../database/postgres.js';

export async function updateUser(winLossDraw, name ){
    await connection.query(`
    UPDATE users SET $1 = $1 + 1 WHERE username = $2;
    `,[winLossDraw, name])
}