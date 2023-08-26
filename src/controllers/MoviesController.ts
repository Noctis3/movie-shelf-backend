import { Request, Response } from 'express';
import { openai } from '../services/openai';
import { getPrompt } from '../utils/prompt';
import { ChatCompletionRequestMessage } from 'openai';

export default class MoviesController {
  async getRecommendedMovies(request: Request, response: Response) {
    try {
      // Add support to receive language as a parameter
      const language = request.body.language;

      if (language !== 'en' && language !== 'es' && language !== 'pt') {
        return response.status(400).json({
          error: 'Language not supported',
        });
      }

      const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: getPrompt(
          String(language),
          request.body.movies
        ) as ChatCompletionRequestMessage[],
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
