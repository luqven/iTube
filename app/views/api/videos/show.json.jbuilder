json.videos do
  json.set! @video.id do
      json.title @video.title
      json.body @video.body
      json.channel_id @video.channel_id
      json.video_url url_for(@video.video_attachment)
      json.id @video.id
  end
end

# json.channels do
#   json.set @video.channel.id do
#       json.name @video.channel.name
#       json.body @video.channel.body
#       json.owner_id @video.channel.owner.id
#     end
# end