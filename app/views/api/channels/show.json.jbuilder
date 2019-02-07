json.channels do
    json.set! @channel.id do
        json.extract! @channel, :name, :body, :owner_id, :id
        json.videoIds @channel.videos.ids
        json.owner_id @channel.owner.id
    end
end

json.videos do
    @channel.videos.each do |video|
        json.set! video.id do
            json.title video.title
            json.body video.body
            json.channel_id video.channel_id
            json.video_url url_for(video.video_attachment)
             json.thumbnail_url url_for(video.thumbnail_attachment)
            json.uploader video.uploader
            json.id video.id
        end
    end
end