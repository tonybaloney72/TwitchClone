if @clip.video_clip.attached?
    json.id @clip.id
    json.user_id @clip.user_id
    json.category @clip.category
    json.title @clip.title
    json.video_clip url_for(@clip.video_clip)

    json.username @clip.user.username
    json.channel_photo url_for(@clip.user.channel_photo)
end