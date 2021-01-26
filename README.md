<h1 align="center">Switch-tv</h1>

<p align="center"><img ="center" src="app/assets/images/TwitchLogoReverse.png?raw=true" width="200" height="200" /></p>

Switch-tv is a video sharing website designed as a Twitch clone. The user can create an account, upload video clips from their favorite streamers or even their own content! Each video clip has it's own chat that the user's can participate in.

<a href="https://switch-tv.herokuapp.com/#/">Switch.tv</a>

## Features

* Upload videos
<img src="app/assets/images/upload-form.png?raw=true">
<img src="app/assets/images/upload-form-preview.png?raw=true">

```javascript
handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('clip[title]', this.state.title);
    formData.append('clip[user_id]', this.props.userId);
    formData.append('clip[category]', this.state.category);
    if (this.state.clipFile) formData.append('clip[video_clip]', this.state.clipFile);
    this.props.submitClip(formData)
        .then(response => {
            (this.props.history.push(`/clips/${response.clip.id}`))
        }
    )
}
```

* Delete videos that you uploaded
<img src="app/assets/images/delete-own-clip.png?raw=true">

* Participate in live chat!
<img src="app/assets/images/live-chat-final.gif?raw=true">

```ruby
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
```
```javascript
componentDidMount() {
  App.cable.subscriptions.create(
    { channel: "ChatChannel", id: this.props.clipId },
    {
      received: data => {
        this.setState({
          messages: this.state.messages.concat([data])
        });
      },
      speak: function(data) {
        return this.perform("speak", data);
      }
    }
  );
}
```

## Technologies

* Ruby on Rails v.5.2.3
* PostgreSQl
* Rails ActiveStore / AWS
* React, Redux
* Webpack

## Todo

* Add user show page/User's "channel"
* Add left navbar for navigating recommended channels/followed channels
* Add /directory to browse channels and video clips
* Allow users to follow other users
* Allow users to edit their information/profile picture
* Add Search bar to find users/categories
* Add Live Streaming