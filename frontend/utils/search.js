export const getAllTitles = () => {
  return $.ajax({
    url: `/api/search`,
    method: 'get',
  }
  );
};
// export const searchForTerms = (searchTerms) => {
//   return $.ajax({
//     url: `/api/videos/${searchTerms}`,
//     method: 'patch',
//     data: searchTerms,
//     contentType: false,
//     processData: false,
//   }
//   );
// };