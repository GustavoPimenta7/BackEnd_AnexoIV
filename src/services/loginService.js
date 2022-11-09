import database from '../repository/connection.js';

async function Login(Email_User, User_Password){
    const conn = await database.connect();
    const sql = 'SELECT * FROM User_tbl WHERE Email_User = ? and User_Password = ?';
    const datalogin = [Email_User, User_Password];
    const [rows] = await conn.query(sql, datalogin);
    conn.end();
    return rows;
  }


export default {Login}