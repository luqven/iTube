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

# define the guest user
test_user = {
  username: "Guest",
  password_digest: BCrypt::Password.create('hunter12')
 }
# create the guest user
User.create(test_user)

dog_names= ["Charlie","Buddy","Max","Archie","Oscar","Toby","Ollie","Bailey","Frankie","Jack",
           "Sadie", "Chloe", "Cody", "Buster", "Lola", "Duke", "Zoe", "Cooper", "Abby", "Riley",
          "Ginger", "Harley", "Roxy", "Bear", "Gracie", "Tucker", "Coco", "Murphy", "Sasha"].shuffle!

dog_activities = ["Chocolate Lab On Boat","Chocolate Ball Swimming","Lab Puppy Golden",
                  "Poodle Car Window", "Poodle PLaying With Ball","Red Shar Pei",
                  "Snow lab cute", "brown puppy ball", "great dane puppies", "puppy at the beach", ]

# create the guest user channel
seed_user = User.find_by(username: "Guest")
channel1 = {
  name: "Guest User Channel",
  owner_id: seed_user.id
}
Channel.create(channel1)

# store guest user's videos
videos = [
  {
    title: dog_names.pop + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: dog_names.pop + " " + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  }, 
  {
    title: dog_names.pop + " " + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  }, 
  {
    title: dog_names.pop + " " + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  }, 
  {
    title: dog_names.pop + " " + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: dog_names.pop + " " + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: dog_names.pop + " " + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: dog_names.pop + " " + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: dog_names.pop + " " + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  },
  {
    title: dog_names.pop + " " + dog_activities.shift,
    body:  Faker::Lorem.paragraph,
    channel_id: seed_user.channel.id,
  }
]

# Make random seed users
random_usernames = ["Joey", "Charles"]
User.create({
  username: random_usernames.pop,
  password_digest: BCrypt::Password.create('hunter12')
})
User.create({
  username: random_usernames.pop,
  password_digest: BCrypt::Password.create('hunter12')
})
random_user1 = User.find_by(username: "Joey")
random_user2 = User.find_by(username: "Charles")
random_users = [random_user1, random_user2]
random_users_channels = []

random_users.each do |new_user|
  random_channel = Channel.create(
    {
      name: new_user.username,
      owner_id: new_user.id
    }
  )
  videos.concat([    
    {
      title: dog_names.pop + ": " + Faker::Marketing.buzzwords,
      body:  Faker::Lorem.paragraph_by_chars(60, false),
      channel_id: new_user.channel.id
    },
    {
      title: dog_names.pop + "? " + Faker::Marketing.buzzwords,
      body:  Faker::Lorem.paragraph_by_chars(60, false),
      channel_id: new_user.channel.id
    },
    {
      title: dog_names.pop + "thinks " + Faker::Marketing.buzzwords,
      body:  Faker::Lorem.paragraph_by_chars(60, false),
      channel_id: new_user.channel.id
    },
    {
      title: dog_names.pop + ". No. " + Faker::Marketing.buzzwords,
      body:  Faker::Lorem.paragraph_by_chars(60, false),
      channel_id: new_user.channel.id
    },
    {
      title: dog_names.pop + "... " + Faker::Marketing.buzzwords,
      body:  Faker::Lorem.paragraph_by_chars(60, false),
      channel_id: new_user.channel.id
    }
  ])
end


["Chocolate Lab On Boat","Chocolate Ball Swimming","Lab Puppy Golden", "Poodle Car Window", "Poodle PLaying With Ball","Red Shar Pei", "Snow lab cute", "brown puppy ball", "great dane puppies", "puppy at the beach", ]

#  aws video urls
videoUrls = [
  ["Chocolate_Lab_On_Boat.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/Chocolate_Lab_On_Boat.mp4"],
  ["Chocolate_Bal_Swimming.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/Chocolate_Lab_Swimming.mp4"],
  ["Lab_Puppy_Golden.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/Lab_Puppy_Golden.mp4"],
  ["Poodle_Car_Window.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/Poodle_Car_Window.mp4"],
  ["Poodle_PLaying_With_Ball.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/Poodle_PLaying_With_Ball.mp4"],
  ["Red_Shar_Pei.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/Red_Shar_Pei_.mp4"],
  ["Snow lab cute.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/Snow+lab+cute.mp4"],
  ["brown_puppy_ball.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/brown_puppy_ball.mp4"],
  ["great_dane_puppies.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/great_dane_puppies.mp4"],
  ["puppy_at_the_beach.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/puppy_at_the_beach.mp4"],
  ["coffe1.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffe1.mp4"],
  ["coffee2.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee2.mp4"],
  ["coffee3.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee3.mp4"],
  ["coffee4.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee4.mp4"],
  ["coffee5.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee5.mp4"],
  ["render1.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render1.mp4"],
  ["render2.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render2.mp4"],
  ["render3.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render3.mp4"],
  ["render4.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render4.mp4"],
  ["render5.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render5.mp4"]
]
#  aws thumbnail urls
thumbnailUrls = [
  ["choc_lab_boat.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/choc_lab_boat.png"],
  ["choc_lab_swimming.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/choc_lab_swimming.png"],
  ["lab_pup_golden.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/lab_pup_golden.png"],
  ["poodle_car_window.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/poodle_car_window.png"],
  ["poodle_ball.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/poodle_ball.png"],
  ["red_shar_pei.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/red_shar_pai.png"],
  ["lab.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/lab.png"],
  ["brown_pup_thumb.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/brown_pup_thumb.png"],
  ["great_dane_thumb.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/great_dane_thumb.png"],
  ["beach_puppy.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/beach_puppy.png"],
  ["coffee1.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee1.png"],
  ["coffee2.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee2.png"],
  ["coffee3.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee3.png"],
  ["coffee4.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee4.png"],
  ["coffee5.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee5.png"],
  ["render1.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render1.png"],
  ["render2.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render2.png"],
  ["render3.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render3.png"],
  ["render4.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render4.png"],
  ["render5.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render5.png"]
]
# aws video thumnbains

# save users's videos
  videos.each_with_index do |video, i|
    curVideo = Video.create(video)
    curVideo.video_attachment.attach(
      io: EzDownload.open(videoUrls[i][1]),
      filename: videoUrls[i][0])
    curVideo.thumbnail_attachment.attach(
      io: EzDownload.open(thumbnailUrls[i][1]),
      filename: thumbnailUrls[i][0])
  end



