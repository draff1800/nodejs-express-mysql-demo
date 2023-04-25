import pool from '../data/config.js'

const router = (app) => {
    app.get("/", (request, response) => {
        console.log(`URL: ${request.url}`);
        response.send({message: "Hello, Client! This is Server speaking..."});
    });

    app.get('/bosses', (request, response) => {
      const id = request.params.id;
      pool.query('SELECT * FROM bosses', (error, result) => {
          if (error) throw error;
          response.send(result);
      });
    });

    app.get('/bosses/:id', (request, response) => {
      const id = request.params.id;
      pool.query('SELECT * FROM bosses WHERE id = ?', id, (error, result) => {
          if (error) throw error;
          response.send(result);
      });
    });

    app.post('/bosses', (request, response) => {
      pool.query('INSERT INTO bosses SET ?', request.body, (error, result) => {
          if (error) throw error;
          response.status(201).send(`Videogame Boss added with ID: ${result.insertId}`);
      });
    });

    app.put('/bosses/:id', (request, response) => {
      const id = request.params.id;
      pool.query('UPDATE bosses SET ? WHERE id = ?', [request.body, id], (error, result) => {
          if (error) throw error;
          response.send('Videogame Boss updated successfully.');
      });
    });

    app.delete('/bosses/:id', (request, response) => {
      const id = request.params.id;
      pool.query('DELETE FROM bosses WHERE id = ?', id, (error, result) => {
          if (error) throw error;
          response.send('Videogame Boss deleted.');
      });
  });
};

export default router;