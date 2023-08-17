import express from 'express';
import 'dotenv/config';

import MoviesController from './controllers/MoviesController';

const routes = express.Router();
const moviesController = new MoviesController();

routes.post('/recommended-movies', moviesController.getRecommendedMovies);

export default routes;
