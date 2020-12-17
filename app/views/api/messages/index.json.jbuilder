@clip_messages.each do |message|
    json.set! message.id do
        json.id message.id
        json.user_id message.user_id
        json.clip_id message.clip_id
        json.body message.body
        json.user message.user.username
    end
end