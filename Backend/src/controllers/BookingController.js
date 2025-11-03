import { getConnectionObject } from '../configs/Dbconfig.js';   


export async function createBooking(request, response)  {
    try {
        const connection = getConnectionObject();
        const { user_id, movie_id, show_time,seats } = request.body;
        const qry = `INSERT INTO booking(user_id, movie_id,show_time, seats) VALUES('${user_id}','${movie_id}','${show_time}','${seats}')`;
        const [resultSet] = await connection.query(qry);
  if(resultSet.affectedRows === 1) {
            response.status(200).send({ message: 'Booking created successfully' });
        }else{
            response.status(500).send({ message: 'Booking creation failed' });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}
 export async function getBookingsByUser(request, response)  {
    try {
        const connection = getConnectionObject();
        const {user_id} = request.params;
        const qry = `SELECT b.*,m.title,m.poster_url
         FROM booking b
         JOIN movie m ON b.movie_id = m.movie_id
         WHERE b.user_id='${user_id}'`;
        const [rows] = await connection.qry(qry);
        response.status(200).send(rows);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}export async function getAllBookings(request, response)  {
    try {
        const connection = getConnectionObject();
        const qry = `SELECT b.booking_id,b.show_time,b.seats,b.status,b.created_at,u.name AS user_name,u.phone AS user_phone,m.title AS movie_title
         FROM booking b
         JOIN user u ON b.user_id = u.user_id
         JOIN movie m ON b.movie_id = m.movie_id
         Orer BY b.created_at DESC`;
        const [rows] = await connection.qry(qry);
        response.status(200).send(rows);
    }catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }}

    export async function updateBookingStatus(request, response)  {
    try {
        const connection = getConnectionObject();
        const {booking_id} = request.params;
        const {status} = request.body;
        const qry = `UPDATE booking SET status='${status}' WHERE booking_id='${booking_id}'`;
        const [resultSet] = await connection.qry(qry);
        if(resultSet.affectedRows === 1) {
            response.status(200).send({ message: 'Booking Cancelled' });
        }else{
            response.status(500).send({ message: 'Booking not found' });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }


    }