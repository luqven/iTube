json.channels do
    @channels.each do |channel|
        json.set! channel.id do
            json.name channel.name
            json.body channel.body
            json.owner_id channel.owner.id
        end
    end
end

# json.videos do
#     @channels.videos.each do |video|
#         json.set video.id do
#             json.title video.title
#             json.body video.body
#             json.channel_id video.channel_id
#             json.video_url url_for(video.video_attachment)
#             json.uploader video.uploader
#             json.id video.id
#         end
#     end
# end
