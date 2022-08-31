import connection from '../database/postgres.js';

export async function updateUser(winLossDraw, userId ){
    await connection.query(`
    UPDATE users SET $1 = $1 + 1 WHERE id = $2;
    `,[winLossDraw, userId])
}