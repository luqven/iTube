export const fetchComments = (videoId) => {
  return $.ajax({
    method: 'get',
    url: `/api/videos/${videoId}/comments`
  })
}

export const postComment = (comment) => {
  return $.ajax({
    method: 'post',
    url: `/api/videos/${comment.video_id}/comments`,
    data: { comment }
  })
}

export const destroyComment = (comment) => {
  return $.ajax({
    method: 'delete',
    url: `/api/videos/${comment.video_id}/comments`
  })
}

