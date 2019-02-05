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

export const patchVideo = (video, videoId) => {
  return $.ajax({
    url: `api/videos/${Number(videoId)}`,
    method: 'patch',
    data: video,
    contentType: false,
    processData: false,
  })
}

export const saveVideo = (formData) => {
  return $.ajax({
    url: `/api/videos/`,
    method: 'post',
    data: formData,
    contentType: false,
    processData: false,
  })
}