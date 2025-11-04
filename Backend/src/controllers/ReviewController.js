import { getConnectionObject } from "../configs/Dbconfig.js";

//Add Review
export async function addReview(request, response) {
    try {
        const connection = getConnectionObject();
        const { movie_id, user_id, rating, comment } = request.body;

        const qry = `INSERT INTO reviews(movie_id, user_id, rating, comment)
                     VALUES('${movie_id}', '${user_id}', '${rating}', '${comment}')`;

        const [resultSet] = await connection.query(qry);

        if (resultSet.affectedRows === 1) {
            // Update average rating of the movie
            const avgQry = `UPDATE movies 
                            SET rating = (SELECT ROUND(AVG(rating),1) FROM reviews WHERE movie_id='${movie_id}')
                            WHERE movie_id='${movie_id}'`;
            await connection.query(avgQry);

            response.status(200).send({ message: "Review added successfully" });
        } else {
            response.status(500).send({ message: "Failed to add review" });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}

// Get All Reviews for a Movie
export async function getReviewsByMovie(request, response) {
    try {
        const connection = getConnectionObject();
        const movie_id = request.params.movie_id;

        const qry = `SELECT r.review_id, r.rating, r.comment, r.created_at, 
                            u.name AS user_name 
                     FROM reviews r 
                     JOIN user u ON r.user_id = u.user_id 
                     WHERE r.movie_id = '${movie_id}'
                     ORDER BY r.created_at DESC`;

        const [rows] = await connection.query(qry);

        if (rows.length > 0) {
            response.status(200).send(rows);
        } else {
            response.status(404).send({ message: "No reviews found for this movie" });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}

// Update Review (User can edit own review)
export async function updateReview(request, response) {
    try {
        const connection = getConnectionObject();
        const { review_id, user_id, rating, comment } = request.body;

        const qry = `UPDATE reviews 
                     SET rating='${rating}', comment='${comment}' 
                     WHERE review_id='${review_id}' AND user_id='${user_id}'`;

        const [resultSet] = await connection.query(qry);

        if (resultSet.affectedRows === 1) {
            // Recalculate average rating for movie
            const avgQry = `UPDATE movies 
                            SET rating = (SELECT ROUND(AVG(rating),1) FROM reviews WHERE movie_id = 
                                         (SELECT movie_id FROM reviews WHERE review_id='${review_id}'))
                            WHERE movie_id = (SELECT movie_id FROM reviews WHERE review_id='${review_id}')`;
            await connection.query(avgQry);

            response.status(200).send({ message: "Review updated successfully" });
        } else {
            response.status(400).send({ message: "Update failed — review not found or unauthorized" });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}

// Delete Review (Both User & Admin)
export async function deleteReview(request, response) {
    try {
        const connection = getConnectionObject();
        const { review_id, user_id, role } = request.body; 
        // role = 'admin' or 'user'

        let qry = "";

        if (role === "admin") {
            // Admin can delete any review
            qry = `DELETE FROM reviews WHERE review_id='${review_id}'`;
        } else {
            // User can delete only their own review
            qry = `DELETE FROM reviews WHERE review_id='${review_id}' AND user_id='${user_id}'`;
        }

        const [resultSet] = await connection.query(qry);

        if (resultSet.affectedRows === 1) {
            // Update avg rating after delete
            const avgQry = `UPDATE movies 
                            SET rating = (SELECT ROUND(AVG(rating),1) FROM reviews WHERE movie_id = 
                                         (SELECT movie_id FROM reviews WHERE review_id='${review_id}' LIMIT 1))
                            WHERE movie_id = (SELECT movie_id FROM reviews WHERE review_id='${review_id}' LIMIT 1)`;
            await connection.query(avgQry);

            response.status(200).send({ message: "Review deleted successfully" });
        } else {
            response.status(400).send({ message: "Delete failed — not authorized or review not found" });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}