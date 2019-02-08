json.users do
  json.set! @user.id do
    json.username @user.username
    json.id @user.id
    json.channel_id @user.channel.id
    json.liked_videos do
      @user.liked_videos.each do |like|
        like.video_id
      end
    end
  end
end