@users.each do |user|
    json.set! user.id do
        json.id user.id
        json.username user.username
        if user.channel_photo.attached?
            json.channel_photo url_for(user.channel_photo)
        end
    end
end