// video utils

export const getAllVideos = () => {
  return $.ajax({
    url: '/api/videos',
    method: 'get',
    }
  );
};

export const getVideo = (id) => {
  return $.ajax({
    url: `/api/users/videos/${id}`,
    method: 'get',
    data: {id},
  });
};

export const fetchUserVideos = (user_id) => {
  return $.ajax({
    url: `/api/users/${user_id}/videos`,
    method: 'get',
    data: {user_id}
  });
};