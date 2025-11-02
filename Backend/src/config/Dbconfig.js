import {createConnection} from "mysql2/promise";

let connection = null;

export async function connectDb() {
    try{
        connection = await createConnection({
            host: 'localhost',
            user: 'root',
            password: 'cdac',
            port: 3306,
            database: 'cinema_stash' 
        });
            console.log("database connected successfully");
    } catch (error) {
            console.log("Error in database connection");
            console.log(error);
    }
}

export function getConnectionObject(){
    return connection;
}