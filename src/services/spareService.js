import database from '../repository/connection.js'

//Inserindo dados de reposição no banco
async function InsertSpare(Number_Spare,Date_Spare, Date_Fill, Type_Spare, Reason, Course, Semester, Period,
    Name_Teachers, Name_Spare, Name_component, Hour_Start, Hour_End, Block_, Aditional, Activity){
    const conn = await database.connect();
    const sql = 'INSERT INTO Spare_tbl (Number_Spare,Date_Spare, Date_Fill, Type_Spare, Reason, Course, Semester, Period, Name_Teachers, Name_Spare, Name_component, Hour_Start, Hour_End, Block_, Aditional, Activity) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    const Spare = [Number_Spare,Date_Spare, Date_Fill,Type_Spare, Reason, Course, 
        Semester, Period, Name_Teachers, Name_Spare, Name_component, Hour_Start, Hour_End, Block_, Aditional, Activity];
    await conn.query(sql, Spare);
    conn.end(); 
}

//Pegando dados do banco
async function GetSpare(){
    const conn = await database.connect();
    const sql = 'SELECT * FROM Spare_tbl';
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}


export default {InsertSpare, GetSpare}