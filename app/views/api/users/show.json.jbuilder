json.extract! @user, :username, :id
json.videos @user.videos, :title, :body, :id