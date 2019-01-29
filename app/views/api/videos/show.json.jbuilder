
json.title @video.title
json.body @video.body
json.channel_id @video.channel_id
json.video_url url_for(@video.video_attachment)
json.id @video.id