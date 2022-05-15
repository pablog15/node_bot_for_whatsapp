const mysql = require('mysql');

async function connection2db() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'pablo',
        password: 'P4bl0P4$$w0rd',
        database: 'node_bot_for_whatsapp'
    })
    try{
        await connection.connect();
        console.log(`Connection success`);
    }catch(error){
        if(error){
            console.log(`An error was happenes when trying to connect to database. Error: ${error}`);
        }
    }
}

connection2db();

module.exports = {
    connection2db
}