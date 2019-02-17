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

# define the quest user
test_user = {
  username: "guest",
  password_digest: BCrypt::Password.create('hunter12')
 }
# create the guest user
User.create(test_user)

seed_user = User.find_by(username: "guest")
# create the guest user channel
channel1 = {
  name: "Guest User Channel",
  owner_id: seed_user.id
}
Channel.create(channel1)
# store guest user's videos
videos = [
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    # title: "Snuffles playing around",
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  }, 
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  }, 
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  }, 
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: Faker::Creature::Dog.name + " " + Faker::Creature::Dog.meme_phrase,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  }
]

#  aws video urls
videoUrls = [
  ["Chocolate_Lab_On_Boat.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/Chocolate_Lab_On_Boat.mp4"],
  ["Chocolate_Bal_Swimming.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/Chocolate_Lab_Swimming.mp4"],
  ["Lab_Puppy_Golden.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/Lab_Puppy_Golden.mp4"],
  ["Poodle_Car_Window.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/Poodle_Car_Window.mp4"],
  ["Poodle_PLaying_With_Ball.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/Poodle_PLaying_With_Ball.mp4"],
  ["Red_Shar_Pei.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/Red_Shar_Pei_.mp4"],
  ["Snow lab cute.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/Snow+lab+cute.mp4"],
  ["brown_puppy_ball.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/brown_puppy_ball.mp4"],
  ["great_dane_puppies.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/great_dane_puppies.mp4"],
  ["puppy_at_the_beach.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/puppy_at_the_beach.mp4"]
]
#  aws thumbnail urls
thumbnailUrls = [
  ["choc_lab_boat.png", "https://s3.us-east-2.amazonaws.com/itube-dev/choc_lab_boat.png"],
  ["choc_lab_swimming.png", "https://s3.us-east-2.amazonaws.com/itube-dev/choc_lab_swimming.png"],
  ["lab_pup_golden.png", "https://s3.us-east-2.amazonaws.com/itube-dev/lab_pup_golden.png"],
  ["poodle_car_window.png", "https://s3.us-east-2.amazonaws.com/itube-dev/poodle_car_window.png"],
  ["poodle_ball.png", "https://s3.us-east-2.amazonaws.com/itube-dev/poodle_ball.png"],
  ["red_shar_pei.png", "https://s3.us-east-2.amazonaws.com/itube-dev/red_shar_pai.png"],
  ["lab.png", "https://s3.us-east-2.amazonaws.com/itube-dev/lab.png"],
  ["brown_pup_thumb.png", "https://s3.us-east-2.amazonaws.com/itube-dev/brown_pup_thumb.png"],
  ["great_dane_thumb.png", "https://s3.us-east-2.amazonaws.com/itube-dev/great_dane_thumb.png"],
  ["beach_puppy.png", "https://s3.us-east-2.amazonaws.com/itube-dev/beach_puppy.png"]
]
# aws video thumnbains

# save guest users's videos
for i in (0...videos.length) do
  video = videos[i]
  curVideo = Video.create(video)
  curVideo.video_attachment.attach(
    io: EzDownload.open(videoUrls[i][1]),
    filename: videoUrls[i][0])
  curVideo.thumbnail_attachment.attach(
    io: EzDownload.open(thumbnailUrls[i][1]),
    filename: thumbnailUrls[i][0])
end



