json.comments do
  @comments.each do |comment|
    json.set comment.id do
      json.body comment.body
      json.user_id comment.user_id
      json.video_id comment.video_id
      json.id comment.id
    end
  end
end