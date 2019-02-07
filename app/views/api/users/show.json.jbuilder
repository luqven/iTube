json.users do
  json.set! @user.id do
    json.username @user.username
    json.id @user.id
    json.channel_id @user.channel.id
  end
end