json.likes do
  @likes.each do |like|
    json.set like.id do
      json.liked like.liked
      json.liker_id like.user_id
      json.video_id like.video_id
      json.id like.id
    end
end