@users.each do |user|
  json.set! user.id do
    json.username user.username
    json.channel user.channel
    json.id user.id
  end
end