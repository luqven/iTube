
json.extract! @channel, :name, :body, :owner_id, :id
json.videos do
    json.array! @channel.videos, :id, :title
end