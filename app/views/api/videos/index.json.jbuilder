json.array! @videos do |video|
  json.title video.title
  json.body video.body
  json.channel_id video.channel_id
  json.id video.id
end