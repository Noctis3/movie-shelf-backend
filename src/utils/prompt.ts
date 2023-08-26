export function getPrompt(language: String, movies: String) {
  if (language === 'en') {
    return [
      {
        role: 'system',
        content:
          'You will act recommending movies from a list of favorite movies and return a list with 5 recommended movies based on the preferences demonstrated in the list. Do not repeat movies that were mentioned in the input. Answer in JSON format.',
      },
      {
        role: 'user',
        content:
          "['Kill Bill: Volume 1', 'Kill Bill: Volume 2', 'Reservoir Dogs', 'Pulp Fiction', 'Inception']",
      },
      {
        role: 'assistant',
        content:
          '[{"title": "Django Unchained", "genre": "action"}, {"title": "Inglorious Basterds", "genre": "action"}]',
      },
      {
        role: 'user',
        content: movies,
      },
    ];
  }

  if (language === 'es') {
    return [
      {
        role: 'system',
        content:
          'Usted actuará recomendando películas a partir de una lista de películas favoritas y devolverá una lista con 5 películas recomendadas basadas en las preferencias demostradas en la lista. No repita películas que se mencionaron en la entrada. Responda en formato JSON.',
      },
      {
        role: 'user',
        content:
          "['Kill Bill: Volume 1', 'Kill Bill: Volume 2', 'Perros de reserva', 'Pulp Fiction', 'El Origen']",
      },
      {
        role: 'assistant',
        content:
          '[{"title": "Django Sin Cadenas", "genre": "action"}, {"title": "Malditos Bastardos", "genre": "action"}]',
      },
      {
        role: 'user',
        content: movies,
      },
    ];
  }

  return [
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
      content: movies,
    },
  ];
}
