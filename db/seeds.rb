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

test_user = {
  username: "guest",
  password_digest: BCrypt::Password.create('hunter12')
 }

User.create(test_user)

seed_user = User.find_by(username: "guest")

 channel1 = {
  name: "Guest User Channel",
  owner_id: seed_user.id
}

Channel.create(channel1)
