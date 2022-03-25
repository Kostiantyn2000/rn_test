export class QueryCombiner {
  /**
   * @param {[[String]]}  queries Should be passed an array of query key value list
   * @returns (String) Should be returned an unified string query value based on entry queries
   */
  static composeQueries(queries) {
    const combinedQueries = queries.map(query => query.join('='));
    if (combinedQueries.length === 1) {
      return `?${combinedQueries[0]}`;
    }
    const unitedQueries = combinedQueries.join('&');
    return `?${unitedQueries}`;
  }
}
