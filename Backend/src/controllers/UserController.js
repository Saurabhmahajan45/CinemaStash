import { compareSync, hashSync } from "bcrypt";
import { getConnectionObject } from "../configs/Dbconfig.js";
import jwt from "jsonwebtoken";

//REGISTER USER 
export async function registerUser(request, response) {
    try {
        const connection = getConnectionObject();
        const { name, phone, password, email} = request.body;
        const encryptedPassword = hashSync(password, 12);
        const qry = `INSERT INTO user(name,phone,password,email) VALUES('${name}','${phone}','${encryptedPassword}','${email}')`;
        const [resultSet] = await connection.query(qry);
        if (resultSet.affectedRows === 1) {
            response.status(200).send({ message: 'Registration successfull, now you can login' });
        }
        else {
            response.status(500).send({ message: 'User registration failed' });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}

//USER LOGIN
export async function userLogin(request, response) {
    try {
        const connection = getConnectionObject();
        const { phone, password } = request.body;
        const qry = `SELECT * FROM user WHERE phone='${phone}'`;
        const [rows] = await connection.query(qry);
        if (rows.length === 0) {
            response.status(400).send({ message: "Login failed, phone doesn't exist" });
        }
        else {
            if(compareSync(password,rows[0].password)){
                const token = jwt.sign({customerId:rows[0].id},'customer1234');
                response.status(200).send({token,message:'Login successful'});
            }
            else{
                response.status(400).send({ message: "Login failed, password is invalid" });
            }
            // compare the password
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}