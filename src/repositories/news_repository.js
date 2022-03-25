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
    const queries = QueryCombiner.composeQueries(
      Object.entries({
        ...this._config.defaultQueries,
        ...{q: 'Ukraine', apiKey: this._config.apiKey},
      }),
    );
    const result = await fetch(`${this._config.apiBase}/everything${queries}`);
    return await result.json();
  }

  async getSpecifiedNews(value) {
    const queries = QueryCombiner.composeQueries(
      Object.entries({
        ...this._config.defaultQueries,
        ...{q: value, apiKey: this._config.apiKey},
      }),
    );
    const result = await fetch(`${this._config.apiBase}/everything${queries}`);
    return await result.json();
  }
}

export default NewsRepository;
