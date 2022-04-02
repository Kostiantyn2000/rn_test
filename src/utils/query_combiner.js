export class QueryCombiner {
  static composeQueries(queries) {
    const combinedQueries = queries.map(query => query.join('='));
    if (combinedQueries.length === 1) {
      return `?${combinedQueries[0]}`;
    }
    const unitedQueries = combinedQueries.join('&');
    return `?${unitedQueries}`;
  }
}
