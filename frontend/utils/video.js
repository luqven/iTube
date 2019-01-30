// video utils

export const fetchAllVideos = () => {
  return $.ajax({
    url: '/api/videos',
    method: 'get',
    }
  );
};

export const fetchVideo = (id) => {
  return $.ajax({
    url: `/api/videos/${id}`,
    method: 'get',
    data: {id},
  });
};