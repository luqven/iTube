export const fetchLikes = (videoId) => {
  return $.ajax({
    method: 'get',
    url: `/api/videos/${videoId}/likes`
  })
}

export const postLike = (like) => {
  return $.ajax({
    method: 'post',
    url: `/api/videos/${like.video_id}/likes`,
    data: {like}
  })
}

export const destroyLike = (like) => {
  return $.ajax({
    method: 'delete',
    url: `/api/videos/${like.video_id}/likes`
  })
}

