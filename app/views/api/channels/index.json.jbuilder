@channels.each do |channel|
    json.set! channel.owner.id do
        json.name channel.name
        json.body channel.body
        json.owner_id channel.owner.id
        json.videos do
                json.array! channel.videos, :id, :title
        end
    end
end