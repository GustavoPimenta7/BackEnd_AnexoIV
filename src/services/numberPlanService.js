import database from '../repository/connection.js'

//Pegando dados do banco
async function GetPlano(Number_Spare, Course){
    const conn = await database.connect();
    const sql = 'SELECT * FROM Spare_tbl WHERE Number_Spare = ? AND Course = ?';
    const dataNumber = [Number_Spare, Course]
    const [rows] = await conn.query(sql,dataNumber);
    conn.end();
    return rows;
}

export default {GetPlano}