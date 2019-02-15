export const searchForTerms = (searchTerms) => {
  return $.ajax({
    url: '/api/videos/',
    method: 'get',
    data: {searchTerms}
  }
  );
};