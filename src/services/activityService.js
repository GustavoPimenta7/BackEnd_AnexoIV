import database from '../repository/connection.js';

// Inserindo dados de componente curricular no banco
async function InsertActivity(Activity){
    const conn = await database.connect();
    const sql = 'INSERT INTO Activity_tbl(Activity) VALUES (?)';
    const activity = [Activity];
    await conn.query(sql, activity);
    conn.end();
}

export default {InsertActivity}