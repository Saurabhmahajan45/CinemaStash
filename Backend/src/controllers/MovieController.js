import { getConnectionObject } from "../configs/Dbconfig.js";

//Adding movie in table by ADMIN
export async function addMovie(request, response) {
    try {
        const connection = getConnectionObject();
        const { title, genre, description, release_year, poster_url } = request.body;

        const qry = `INSERT INTO movies (title, genre, description, release_year, poster_url) 
                     VALUES ('${title}', '${genre}', '${description}', ${release_year}, '${poster_url}')`;

        const [resultSet] = await connection.query(qry);
        if (resultSet.affectedRows === 1) {
            response.status(200).send({ message: 'Movie Added Successfully' });
        } else {
            response.status(500).send({ message: 'Cannot add movie at this time' });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}

// show all movies by ADMIN/USER
export async function getAllMovies(request, response) {
    try {
        const connection = getConnectionObject();
        const qry = `SELECT * FROM movies`;
        const [rows] = await connection.query(qry);
        response.status(200).send(rows);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}

// Get movie by ID bu user
export async function getMovieById(request, response) {
    try {
        const connection = getConnectionObject();
        const qry = `SELECT * FROM movies WHERE movie_id=${request.params.id}`;
        const [rows] = await connection.query(qry);
        if (rows.length === 0) {
            response.status(404).send({ message: 'Movie not found' });
        } else {
            response.status(200).send(rows[0]);
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}

// Update movie by ADMIN
export async function updateMovie(request, response) {
    try {
        const connection = getConnectionObject();
        const { title, genre, description, release_year, poster_url, rating } = request.body;

        const qry = `UPDATE movies 
                     SET title='${title}', genre='${genre}', description='${description}', 
                         release_year=${release_year}, poster_url='${poster_url}'
                     WHERE movie_id=${request.params.id}`;

        const [resultSet] = await connection.query(qry);
        if (resultSet.affectedRows === 1) {
            response.status(200).send({ message: 'Movie Updated Successfully' });
        } else {
            response.status(500).send({ message: 'Movie update operation failed' });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}

// Delete movie by ADMIN
export async function deleteMovie(request, response) {
    try {
        const connection = getConnectionObject();
        const qry = `DELETE FROM movies WHERE movie_id=${request.params.id}`;
        const [resultSet] = await connection.query(qry);
        if (resultSet.affectedRows === 1) {
            response.status(200).send({ message: 'Movie Deleted Successfully' });
        } else {
            response.status(404).send({ message: 'Movie not found' });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}

// Search movie by title
export async function searchMovies(request, response) {
    try {
        const connection = getConnectionObject();
        const { title } = request.query;
        const qry = `SELECT * FROM movies WHERE title LIKE '%${title}%'`;
        const [rows] = await connection.query(qry);
        response.status(200).send(rows);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}

//  filter movie by genre
export async function getMoviesByGenre(request, response) {
    try {
        const connection = getConnectionObject();
        const { genre } = request.params;
        const qry = `SELECT * FROM movies WHERE genre='${genre}'`;
        const [rows] = await connection.query(qry);
        response.status(200).send(rows);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}

// Update movie rating and review by USER/ADMIN
export async function updateMovieRating(request, response) {
    try {
        const connection = getConnectionObject();
        const { rating } = request.body;
        const qry = `UPDATE movies SET rating=${rating} WHERE movie_id=${request.params.id}`;
        const [resultSet] = await connection.query(qry);

        if (resultSet.affectedRows === 1) {
            response.status(200).send({ message: 'Movie Rating Updated Successfully' });
        } else {
            response.status(500).send({ message: 'Movie rating update failed' });
        }
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: 'Something went wrong' });
    }
}
