json.users do
  @users.each do |user|
    json.set! user.id do
      json.username user.username
      json.id user.id
      json.channel_id user.channel.id
    end
  end
end