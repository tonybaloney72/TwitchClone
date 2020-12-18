<!-- * Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->

<center> <h1>Switch-tv</h1> </center>

<!-- ![alt text](app/assets/images/Twitch-logo-reverse.png?raw=true "Switch") -->
<p align="center"><img ="center" src="app/assets/images/Twitch-logo-reverse.png?raw=true" width="200" height="200" /></p>

Switch-tv is a video sharing website designed as a Twitch clone. The user can create an account, upload video clips from their favorite streamers or even their own content! Each video clip has it's own chat that the user's can participate in.

<a href="https://switch-tv.herokuapp.com/#/">Switch.tv</a>

## Features

* Upload videos
<img src="app/assets/images/upload-form.png?raw=true">
<img src="app/assets/images/upload-form-preview.png?raw=true">
* Delete videos that you uploaded
<img src="app/assets/images/delete-own-clip.png?raw=true">
* Participate in chat

## Tech Specs

* Ruby on Rails v.5.2.3
* PostgreSQl
* Rails ActiveStore / AWS
* React, Redux
* Webpack

## Todo

* Add video carousel to landing/home page
* Add live chat using Action Cable
    * add color randomizer for usernames in chat
* Add user show page/User's "channel"
* Add left navbar for navigating recommended channels/followed channels
* Add /directory to browse channels and video clips
* Allow users to follow other users
* Allow users to edit their information/profile picture
* Add Search bar to find users/categories
* Add Live Streaming