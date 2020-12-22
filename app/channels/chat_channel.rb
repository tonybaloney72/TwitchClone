class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_channel_#{params[:id]}"
  end

  def speak(data)
    message = Message.create(body: data['message'], clip_id: data['clip_id'], user_id: data['user_id'])
    if message.save
      socket = { username: message.user.username, message: message.body }
      ChatChannel.broadcast_to("chat_channel_#{data['clip_id']}", socket)
    end
  end

  def unsubscribed; end
end
