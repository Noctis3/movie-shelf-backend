import { Request, Response } from 'express';
import { openai } from '../services/openai';

import database from '../database/connection';

export default class MoviesController {
  async getRecommendedMovies(request: Request, response: Response) {
    try {
      const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'Você irá atuar recomendando filmes a partir de uma lista de filmes favoritos e retornar uma lista com 5 filmes recomendados a partir das preferências demonstradas na lista. Não repita filmes que foram mencionados no input. Responda em formato JSON.',
          },
          {
            role: 'user',
            content:
              "['Kill Bill: Volume 1', 'Kill Bill: Volume 2', 'Cães de Aluguel', 'Pulp Fiction', 'A Origem']",
          },
          {
            role: 'assistant',
            content:
              '[{"title": "Django Livre", "genre": "action"}, {"title": "Bastardos Inglórios", "genre": "action"}]',
          },
          {
            role: 'user',
            content: request.body.movies,
          },
        ],
      });

      return response.json(
        JSON.parse(chatCompletion.data.choices[0].message?.content || '')
      );
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }
}
