import database from '../repository/connection.js'

//Pegando dados do banco
async function GetSpare(Course){
    const conn = await database.connect();
    const sql = 'SELECT * FROM Spare_tbl WHERE Course = ?';
    const dataCurso = [Course]
    const [rows] = await conn.query(sql,dataCurso);
    conn.end();
    return rows;
}

export default {GetSpare}