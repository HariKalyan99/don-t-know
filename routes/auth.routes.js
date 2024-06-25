import express from 'express';

const routes = express.Router();

routes.get("/hello", (request, response) => {
    try {
        return response.status(200).json({message: "Hello world"})
    } catch (error) {
        return response.status(500).json({error: "Internal server error"})
    }
})

export default routes;