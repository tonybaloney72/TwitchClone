@clips.each do |clip|
    json.set! clip.id do
        json.id clip.id
        json.user_id clip.user_id
        json.category clip.category
        json.title clip.title
        json.video_clip url_for(clip.video_clip)
    end
end