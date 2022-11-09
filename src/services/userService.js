import database from '../repository/connection.js';

// Inserindo dados de usuário no banco
async function InsertUser( Email_User, Name_User, User_Password){
    const conn = await database.connect();
    const sql = 'INSERT INTO User_tbl (Email_User, Name_User, User_Password) Values(?,?,?)';
    const dataCadastro = [Email_User, Name_User, User_Password];
    await conn.query(sql, dataCadastro)
}

export default {InsertUser};