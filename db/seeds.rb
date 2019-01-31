# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Channel.destroy_all
Video.destroy_all

# user1 = {
#   username: Faker::DragonBall.character,
#   password_digest: BCrypt::Password.create('hunter12')
#  }
# user2 = {
#   username: "test_user1",
#   password_digest: BCrypt::Password.create('hunter12')
#  }
# user3 = {
#   username: "Uub",
#   password_digest: BCrypt::Password.create('hunter12')
#  }
test_user = {
  username: "guest",
  password_digest: BCrypt::Password.create('hunter12')
 }


# User.create(user1)
# User.create(user2)
# User.create(user3)
User.create(test_user)

seed_user = User.find_by(username: "guest")

 channel1 = {
  name: "Guest User Channel",
  owner_id: seed_user.id
}

Channel.create(channel1)

# videos = [ video1 = {
#    title: "my first upload!",
#    body: "loving rails and react..",
#    channel_id: seed_user.channel.id } ]
#  },
#  video2 = {
#    title: Faker::FamousLastWords.last_words,
#    body: Faker::GameOfThrones.quote,
#    channel_id: seed_user.channel.id
#  },
#  video3 = {
#    title: Faker::FamousLastWords.last_words,
#    body: Faker::GameOfThrones.quote,
#    channel_id: seed_user.channel.id
#  },
#  video4 = {
#    title: Faker::FamousLastWords.last_words,
#    body: Faker::GameOfThrones.quote,
#    channel_id: seed_user.channel.id
#  },
#  video5 = {
#    title: Faker::FamousLastWords.last_words,
#    body: Faker::GameOfThrones.quote,
#    channel_id: seed_user.channel.id
#  },
#  video6 = {
#    title: Faker::FamousLastWords.last_words,
#    body: Faker::GameOfThrones.quote,
#    channel_id: seed_user.channel.id
#  }]

# Video.create(videos)
# Video.first.video_attachment.attach(io: File.open("/Users/luish.balljr./desktop/great_dane_puppies.mp4"), filename: "great_dane_puppies.mp4")