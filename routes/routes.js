const bosses = [
    {
      id: 1,
      name: "Emperor Calus",
      difficulty: 5,
    },
    {
      id: 2,
      name: "Riven of a Thousand Voices",
      difficulty: 8,
    },
];

const router = (app) => {
    app.get("/", (request, response) => {
        console.log(`URL: ${request.url}`);
        response.send({message: "Hello, Client! This is Server speaking..."});
    });

    app.get("/bosses", (request, response) => {
        response.send(bosses);
    });
};

export default router;