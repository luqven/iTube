json.likes do
  @likes.each do |like|
    json.set like.id do
      json.liked like.liked
      json.liker_id like.user_id
      json.video_id like.video_id
      json.id like.id
    end
  end
end

json.users do
  @likes.user do
    json.set! user.id do
      json.username user.username
      json.id user.id
      json.channel_id user.channel.id
      json.liked_videos do
        user.liked_videos.each do |like|
          like.video_id
        end
      end
    end
  end
end