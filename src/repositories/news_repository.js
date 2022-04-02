import {QueryCombiner} from '../utils/query_combiner';

class NewsRepository {
  _config = {
    apiKey: 'ed1e9608c6b74576850efabcfa9f73e5',
    apiBase: 'https://newsapi.org/v2',
    lang: 'en',
    defaultQueries: {
      sortBy: 'popularity',
    },
  };

  async getWarNews() {
    try {
      const queries = QueryCombiner.composeQueries(
        Object.entries({
          ...this._config.defaultQueries,
          ...{q: 'Ukraine', apiKey: this._config.apiKey},
        }),
      );

      const result = await fetch(
        `${this._config.apiBase}/everything${queries}`,
      );
      if (result.status === 200) {
        return await result.json();
      } else {
        throw new Error('Problem http');
      }
    } catch (error) {
      return error;
    }
  }

  async getSpecifiedNews(value) {
    const queries = QueryCombiner.composeQueries(
      Object.entries({
        ...this._config.defaultQueries,
        ...{q: value, apiKey: this._config.apiKey},
      }),
    );
    const result = await fetch(`${this._config.apiBase}/everything${queries}`);
    return result.json();
  }
}

export default NewsRepository;
