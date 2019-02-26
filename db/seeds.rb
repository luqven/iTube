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

# define the seed users
guest_user = {
  username: "Guest",
  password_digest: BCrypt::Password.create('hunter12')
 }
seed_user1 = {
  username: "Uub",
  password_digest: BCrypt::Password.create('hunter13')
}
seed_user2 = {
  username: "Matt",
  password_digest: BCrypt::Password.create('hunter14')
}

  # create them in the db
User.create(guest_user)
User.create(seed_user1)
User.create(seed_user2)
  # store them for local reference
guest_user = User.find_by(username: "Guest")
seed_user1 = User.find_by(username: "Uub")
seed_user2 = User.find_by(username: "Matt")
# create the seed users channels
  # create them in the db
channel1 = {
  name: "Guest User Channel",
  owner_id: guest_user.id
}
channel2 = {
  name: "Uub's coffee reviews",
  owner_id: seed_user1.id
}
channel3 = {
  name: "Matt's Adobe Creations",
  owner_id: seed_user2.id
}
  # save them in the db
Channel.create!(channel1)
Channel.create!(channel2)
Channel.create!(channel3)


# set guest user's videos -- puppy videos
video1  = {title: "Charlie the chocolate Lab On Boat", body: "Charlie loves riding in the lake on a boat", channel_id: guest_user.channel.id}
video2  = {title: "Buddy loves swimming", body: "this chocolate lab is quite fond of water", channel_id: guest_user.channel.id}
video3  = {title: "Max: the cutest lab puppy ever!", body: "Max doesn't know it, but he's barely a few months old", channel_id: guest_user.channel.id}
video4  = {title: "Archie loves the fresh air.. we think", body: "That or he really, really hates the smell of the passenger..", channel_id: guest_user.channel.id}
video5  = {title: "Oscar's ball is kinda nasty, but it's his favorite", body: "Just tru and take it from him... not a fun.", channel_id: guest_user.channel.id}
video6  = {title: "Toby the red shar pei. That's not his name but..", body: "It really should be his name. Can you relly just every say Toby and not 'the red shar pei'?", channel_id: guest_user.channel.id}
video7  = {title: "Ollie loves that winter is coming!", body: "Just look at his tail wag haha", channel_id: guest_user.channel.id}
video8  = {title: "Brown puppies like Bailey are just the cutest", body: "even when they can't seem to understand playtime haha", channel_id: guest_user.channel.id}
video9  = {title: "Frankie's pups are so cute! 11 / 10", body: "Need we say more?", channel_id: guest_user.channel.id}
video10 = {title: "Jack begs us to take him to the beach", body: "We obliged. Naturally", channel_id: guest_user.channel.id}
video_11 = {title: "You wont be able to stop laghing at the cute puppies", body: "Simply the funniest puppies in the planet.", channel_id: guest_user.channel.id}
video_12 = {title: "Puppy cuteness overload", body: "You were warned!", channel_id: guest_user.channel.id}
video_13 = {title: "These great danes love playing by the lake", body: "You can tell they hardly know their size", channel_id: guest_user.channel.id}
video_14 = {title: "Talkative cat meeting great dane for the first time", body: "The unlikeliest of friends", channel_id: guest_user.channel.id}
# set seed_user 1 videos
video_15 = {title: "Zig Zag Coffee Bar: 3 / 10",body: "No respect from the baristas here. Cannot reccomend.",channel_id: seed_user1.channel.id}
video_16 = {title: "New Blue Cafe: 6 / 10",body: "Decent blends, but terrible ambiance.",channel_id: seed_user1.channel.id}
video_17 = {title: "Hazelnut Drop Cafe: 9 / 10",body: "Good beans, great milk, even better baristas. Bad decoration though.",channel_id: seed_user1.channel.id}
video_18 = {title: "Fatty Teapot Coffee Bar: 5 / 10",body: "Decent. Pay more than $3 a cup and you were robbed though.",channel_id: seed_user1.channel.id}
video_19 = {title: "Precious Harvest Joint: 4 /10",body: "Pretty meh, but good in a pinch.",channel_id: seed_user1.channel.id}
video_20 = {title: "Best coffeeshops in Tokyo",body: "You wont believe what great deals you can get on coffee in Japan",channel_id: seed_user1.channel.id}
video_21 = {title: "Do you know all your types of coffee?",body: "In this video we cover every type of coffee imaginable",channel_id: seed_user1.channel.id}
# set seed_user 2 videos
video_22 = {title: "Teenage Sword Planet",body: "This moving arti piece illustrates how inequality makes me feel like we're loosing our inner chi.",channel_id: seed_user2.channel.id}
video_23 = {title: "Mystic Spork Commander",body: "Meant as a commentary on what we're living through..",channel_id: seed_user2.channel.id}
video_24 = {title: "Imperial Alligator Nitro",body: "Fun. That's we all need these day no? Some fun.",channel_id: seed_user2.channel.id}
video_25 = {title: "Silly Baseball Dance Party",body: "That's what 'americas pastime' has become. The degredation of standards embodied in this flowing epic.",channel_id: seed_user2.channel.id}
video_26 = {title: "Miracle Mech from Mars",body: "If only.. Comment and like!",channel_id: seed_user2.channel.id}
video_27= {title: "Really cool music visualizer",body: "If only I could make this.. Comment and like!",channel_id: seed_user2.channel.id}
videos = [ video1,video2,video3,video4,video5,video6,video7,video8,video9,video10,video_11,
           video_12,video_13,video_14,video_15,video_16,video_17,video_18,video_19,video_20,
           video_21, video_22, video_23, video_24, video_25, video_26, video_27 ]
#  store aws video urls
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
  ["dog11.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/dog11.mp4"],
  ["dog12.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/dog12.mp4"],
  ["dog13.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/dog13.mp4"],
  ["dog14.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/dog14.mp4"],
  ["coffe1.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffe1.mp4"],
  ["coffee2.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee2.mp4"],
  ["coffee3.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee3.mp4"],
  ["coffee4.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee4.mp4"],
  ["coffee5.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee5.mp4"],
  ["coffee6.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee6.mp4"],
  ["coffee7.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee7.mp4"],
  ["render1.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render1.mp4"],
  ["render2.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render2.mp4"],
  ["render3.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render3.mp4"],
  ["render4.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render4.mp4"],
  ["render5.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render5.mp4"],
  ["render6.mp4", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render6.mp4"]
]
#  store aws thumbnail urls
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
  ["dog11.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/dog11.png"],
  ["dog12.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/dog12.png"],
  ["dog13.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/dog13.png"],
  ["dog14.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/dog14.png"],
  ["coffee1.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee1.png"],
  ["coffee2.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee2.png"],
  ["coffee3.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee3.png"],
  ["coffee4.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee4.png"],
  ["coffee5.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee5.png"],
  ["coffee6.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee6.png"],
  ["coffee7.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/coffee7.png"],
  ["render1.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render1.png"],
  ["render2.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render2.png"],
  ["render3.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render3.png"],
  ["render4.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render4.png"],
  ["render5.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render5.png"],
  ["render6.png", "https://s3.us-east-2.amazonaws.com/itube-dev/seed-videos/render6.png"]
]
# save seed user videos to db
videos.each_with_index do |video, i|
  curVideo = Video.create!(video)      
  io = videoUrls[i][1]
  filename = videoUrls[i][0]            
  curVideo.video_attachment.attach(io: EzDownload.open(io), filename: filename)    
  curVideo.thumbnail_attachment.attach(io: EzDownload.open(thumbnailUrls[i][1]),filename: thumbnailUrls[i][0])    
end
print("all videos successfully saved!")