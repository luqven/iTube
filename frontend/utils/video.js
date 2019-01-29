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

export const fetchUserVideos = (user_id) => {
  return $.ajax({
    url: `/api/users/${user_id}`,
    method: 'get',
    data: {user_id}
  });
};