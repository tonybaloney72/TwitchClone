require 'open-uri'

User.delete_all
Category.delete_all
Clip.delete_all
Message.delete_all

# email, username, password
demo_user = User.create({email: 'demouser@email.com', username: 'SwitchDemoUser', password: '123456'})
demo_user_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/genericUserLogo.png')
demo_user.channel_photo.attach(io: demo_user_image, filename: 'genericUserLogo.png')

tonybaloney = User.create({email: 'baloney@email.com', username: 'TonyBaloney', password: '654321'})
tonybaloney_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/genericUserLogo.png')
tonybaloney.channel_photo.attach(io: tonybaloney_image, filename: 'genericUserLogo.png')

the_hermit = User.create({email: 'thirduser@email.com', username: 'TheHermit', password: 'hermit321'})
the_hermit_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/gfh.png')
the_hermit.channel_photo.attach(io: the_hermit_image, filename: 'gfh.png')

jessicas_dad = User.create({email: 'thirduser@email.com', username: 'JessicasDad', password: 'neenoh123'})
jessicas_dad_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/neenoh.png')
jessicas_dad.channel_photo.attach(io: jessicas_dad_image, filename: 'neenoh.png')

zorngeist = User.create({email: 'thirduser@email.com', username: 'Zorngeist', password: 'psycho456'})
zorngeist_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/psychoghost.jpeg')
zorngeist.channel_photo.attach(io: zorngeist_image, filename: 'psychoghost.jpeg')

fresh_goat = User.create({email: 'thirduser@email.com', username: 'FreshGoat', password: 'boxygoat'})
fresh_goat_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/boxyfresh.png')
fresh_goat.channel_photo.attach(io: fresh_goat_image, filename: 'boxyfresh.png')

its_ufah = User.create({email: 'thirduser@email.com', username: 'itsUfah', password: 'itshafu'})
its_ufah_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/hafu.png')
its_ufah.channel_photo.attach(io: its_ufah_image, filename: 'hafu.png')

six_up = User.create({email: 'thirduser@email.com', username: '6uuup', password: '5up321'})
six_up_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/5up.png')
six_up.channel_photo.attach(io: six_up_image, filename: '5up.png')

zjvas = User.create({email: 'thirduser@email.com', username: 'Zjvas', password: 'savjz8'})
zjvas_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/savjz.jpeg')
zjvas.channel_photo.attach(io: zjvas_image, filename: 'savjz.jpeg')

justblap = User.create({email: 'different@email.com', username: 'JustBlap', password: 'bleeblap'})
justblap_image = open('https://switch-seeds.s3-us-west-1.amazonaws.com/channel_photos/justbree.png')
justblap.channel_photo.attach(io: justblap_image, filename: 'justbree.png')


# title
hunt = Category.create({title: 'Hunt: Showdown'})
hunt_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/categories/Hunt_Showdown.jpg')
hunt.image.attach(io: hunt_file, filename: 'Hunt_Showdown.jpg')

among = Category.create({title: 'Among Us'})
among_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/categories/Among_Us.jpg')
among.image.attach(io: among_file, filename:'Among_Us.jpg')

hearth = Category.create({title: 'Hearthstone'})
hearth_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/categories/Hearthstone.jpg')
hearth.image.attach(io: hearth_file, filename: 'Hearthstone.jpg')

sot = Category.create({title: 'Sea of Thieves'})
sot_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/categories/Sea_of_Thieves.jpg')
sot.image.attach(io: sot_file, filename: 'Sea_of_Thieves.jpg')


# user_id, category, title
clip1 = Clip.create({user_id: fresh_goat.id, category: sot.title, title: "Boarding the enemy vessel... poorly"})
clip1_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/boxy_upload_this.mp4')
clip1.video_clip.attach(io: clip1_file, filename: 'boxy_upload_this.mp4')

clip2 = Clip.create({user_id: fresh_goat.id, category: sot.title, title: "Well that took a sudden turn"})
clip2_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/BoxyFresh2.mp4')
clip2.video_clip.attach(io: clip2_file, filename: 'BoxyFresh2.mp4')

clip3 = Clip.create({user_id: six_up.id, category: among.title, title: "Cult of the Tree"})
clip3_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/cult_of_tree.mp4')
clip3.video_clip.attach(io: clip3_file, filename: 'cult_of_tree.mp4')

clip4 = Clip.create({user_id: demo_user.id, category: hearth.title, title: "1 in a million RNG"})
clip4_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/dogdog.mp4')
clip4.video_clip.attach(io: clip4_file, filename: 'dogdog.mp4')

clip5 = Clip.create({user_id: the_hermit.id, category: hunt.title, title: "Voice of an Angel"})
clip5_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/gfh.mp4')
clip5.video_clip.attach(io: clip5_file, filename: 'gfh.mp4')

clip6 = Clip.create({user_id: its_ufah.id, category: among.title, title: "1 round Imposter win!"})
clip6_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/itshafu.mp4')
clip6.video_clip.attach(io: clip6_file, filename: 'itshafu.mp4')

clip7 = Clip.create({user_id: jessicas_dad.id, category: hunt.title, title: "Perfect timing"})
clip7_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/neenoh.mp4')
clip7.video_clip.attach(io: clip7_file, filename: 'neenoh.mp4')

clip8 = Clip.create({user_id: zjvas.id, category: hearth.title, title: "Never laki"})
clip8_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/never_laki.mp4')
clip8.video_clip.attach(io: clip8_file, filename: 'never_laki.mp4')

clip9 = Clip.create({user_id: justblap.id, category: hunt.title, title: "Pitchfork 1: The Reckoning"})
clip9_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/pitchfork_1.mp4')
clip9.video_clip.attach(io: clip9_file, filename: 'pitchfork_1.mp4')

clip10 = Clip.create({user_id: justblap.id, category: hunt.title, title: "Pitchfork 2: Electric Boogaloo"})
clip10_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/pitchfork_2.mp4')
clip10.video_clip.attach(io: clip10_file, filename: 'pitchfork_2.mp4')

clip11 = Clip.create({user_id: zorngeist.id, category: hunt.title, title: "Concertina bomb OP"})
clip11_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/clips/psychoghost.mp4')
clip11.video_clip.attach(io: clip11_file, filename: 'psychoghost.mp4')

# body, user_id, clip_id
# clip 1
message_1_clip_1 = Message.create({body: "ahahahahaha", user_id: tonybaloney.id, clip_id: clip1.id})
message_2_clip_1 = Message.create({body: "lol whooooops", user_id: its_ufah.id, clip_id: clip1.id})
message_3_clip_1 = Message.create({body: "Perfect way to end your adeventures with her lul", user_id: the_hermit.id, clip_id: clip1.id})
message_4_clip_1 = Message.create({body: "LET'S GOOOOOOOO!!!", user_id: six_up.id, clip_id: clip1.id})
message_5_clip_1 = Message.create({body: "So close!", user_id: tonybaloney.id, clip_id: clip1.id})

# clip 2
message_1_clip_2 = Message.create({body: "uhhhhhh....", user_id: jessicas_dad.id, clip_id: clip2.id})
message_2_clip_2 = Message.create({body: "lol wtf", user_id: justblap.id, clip_id: clip2.id})
message_3_clip_2 = Message.create({body: "Beard getting a little freaky over there", user_id: justblap.id, clip_id: clip2.id})
message_4_clip_2 = Message.create({body: "lol", user_id: tonybaloney.id, clip_id: clip2.id})
message_5_clip_2 = Message.create({body: "Here is some information", user_id: zorngeist.id, clip_id: clip2.id})
message_6_clip_2 = Message.create({body: "Lorem Ipsum", user_id: zorngeist.id, clip_id: clip2.id})
message_7_clip_2 = Message.create({body: "bahahahaha", user_id: its_ufah.id, clip_id: clip2.id})
message_8_clip_2 = Message.create({body: "The sudden stream ending is always great for a laugh", user_id: tonybaloney.id, clip_id: clip2.id})
message_9_clip_2 = Message.create({body: "Moooom! Mr. Streamer is being gross!", user_id: zjvas.id, clip_id: clip2.id})

# clip 3
message_1_clip_3 = Message.create({body: "Seed Seed Seed Seed", user_id: zjvas.id, clip_id: clip3.id})
message_2_clip_3 = Message.create({body: "Hi Mr. Skeletal", user_id: tonybaloney.id, clip_id: clip3.id})
message_3_clip_3 = Message.create({body: "IT'S PRONOUNCED HER-MY-UH-KNEE", user_id: zorngeist.id, clip_id: clip3.id})
message_4_clip_3 = Message.create({body: "her-me-own?", user_id: fresh_goat.id, clip_id: clip3.id})
message_5_clip_3 = Message.create({body: "omg this dude", user_id: zorngeist.id, clip_id: clip3.id})
message_6_clip_3 = Message.create({body: "her-moiney? Is he for real?", user_id: its_ufah.id, clip_id: clip3.id})
message_7_clip_3 = Message.create({body: "Seeding information takes forever.", user_id: justblap.id, clip_id: clip3.id})

# clip 4
message_1_clip_4 = Message.create({body: "More Lorem Ipsum!", user_id: its_ufah.id, clip_id: clip4.id})
message_2_clip_4 = Message.create({body: "bleep blap bloop blap blap", user_id: tonybaloney.id, clip_id: clip4.id})
message_3_clip_4 = Message.create({body: "ooooooOOOOOOOoooooo", user_id: jessicas_dad.id, clip_id: clip4.id})
message_4_clip_4 = Message.create({body: "What an angelic voice you have", user_id: zorngeist.id, clip_id: clip4.id})
message_5_clip_4 = Message.create({body: "Bacon is fantastic.", user_id: fresh_goat.id, clip_id: clip4.id})

# clip 5
message_1_clip_5 = Message.create({body: "Pizza stinks outside of the northeast.", user_id: tonybaloney.id, clip_id: clip5.id})
message_2_clip_5 = Message.create({body: "Christmas music before Thanksgiving is ridiculous.", user_id: justblap.id, clip_id: clip5.id})
message_3_clip_5 = Message.create({body: "I'm okay with Pineapples on pizza.", user_id: fresh_goat.id, clip_id: clip5.id})
message_4_clip_5 = Message.create({body: "Toiler paper goes over, not under. Whoever puts the roll on that way is a monster.", user_id: its_ufah.id, clip_id: clip5.id})

# clip 6
message_1_clip_6 = Message.create({body: "Breakfast food is good at any time of the day", user_id: tonybaloney.id, clip_id: clip6.id})
message_2_clip_6 = Message.create({body: "No really, pizza is only good in the Northeast. Specifically Connecticut and New York.", user_id: justblap.id, clip_id: clip6.id})
message_3_clip_6 = Message.create({body: "I really want some pizza if you can't tell", user_id: fresh_goat.id, clip_id: clip6.id})
message_4_clip_6 = Message.create({body: "like... really badly.", user_id: zorngeist.id, clip_id: clip6.id})
message_5_clip_6 = Message.create({body: "So badly I'm commenting over different users in my seed data", user_id: tonybaloney.id, clip_id: clip6.id})
message_6_clip_6 = Message.create({body: "I could definitely go for some bacon and eggs as well. mmmmm bacon", user_id: six_up.id, clip_id: clip6.id})
message_7_clip_6 = Message.create({body: "I'm currently listening to Four Year Strong while seeding this data.", user_id: its_ufah.id, clip_id: clip6.id})
message_8_clip_6 = Message.create({body: "The new album Brain Pain S L A P S", user_id: jessicas_dad.id, clip_id: clip6.id})
message_9_clip_6 = Message.create({body: "Only 8 days until christmas!", user_id: jessicas_dad.id, clip_id: clip6.id})
message_10_clip_6 = Message.create({body: "There's a good chance no one will read all of this.", user_id: zorngeist.id, clip_id: clip6.id})
message_11_clip_6 = Message.create({body: "blah blah blah blah blah", user_id: tonybaloney.id, clip_id: clip6.id})

# clip 7
message_1_clip_7 = Message.create({body: "I'm doing this during lunch.", user_id: fresh_goat.id, clip_id: clip7.id})
message_2_clip_7 = Message.create({body: "I really want to play video games. Been a while.", user_id: tonybaloney.id, clip_id: clip7.id})
message_3_clip_7 = Message.create({body: "Back 4 Blood alpha starts today and I got accepted into it, but I don't think I'll be able to even play. Too much to do!", user_id: the_hermit.id, clip_id: clip7.id})
message_4_clip_7 = Message.create({body: "It's crazy that this cohort started 3 months ago. My how time flies.", user_id: tonybaloney.id, clip_id: clip7.id})
message_5_clip_7 = Message.create({body: "October is the best month", user_id: six_up.id, clip_id: clip7.id})
message_6_clip_7 = Message.create({body: "And not just because my birthday is in it.", user_id: zjvas.id, clip_id: clip7.id})

# clip 8
message_1_clip_8 = Message.create({body: "I think I actually enjoyed the CSS the most out of all of this so far.", user_id: fresh_goat.id, clip_id: clip8.id})
message_2_clip_8 = Message.create({body: "Although that satisfaction of starting and finishing a feature with little to no help is amazing.", user_id: tonybaloney.id, clip_id: clip8.id})
message_3_clip_8 = Message.create({body: "Boy oh boy. What can I ramble about now.", user_id: justblap.id, clip_id: clip8.id})
message_4_clip_8 = Message.create({body: "This seed data turned into a stream of conciousness", user_id: zjvas.id, clip_id: clip8.id})

# clip 9
message_1_clip_9 = Message.create({body: "Beef Jerky is very good. My step mom just sent me some for Christmas.", user_id: the_hermit.id, clip_id: clip9.id})
message_2_clip_9 = Message.create({body: "Windows > Mac", user_id: tonybaloney.id, clip_id: clip9.id})
message_3_clip_9 = Message.create({body: "Android > iPhone", user_id: tonybaloney.id, clip_id: clip9.id})
message_4_clip_9 = Message.create({body: "Let's have one more kahoot!", user_id: zjvas.id, clip_id: clip9.id})
message_5_clip_9 = Message.create({body: "Playstation > Nintendo > Xbox", user_id: fresh_goat.id, clip_id: clip9.id})
message_6_clip_9 = Message.create({body: "The Original FF7 is one of my all time favorite games", user_id: the_hermit.id, clip_id: clip9.id})
message_7_clip_9 = Message.create({body: "Hyrdo Homies for life!", user_id: jessicas_dad.id, clip_id: clip9.id})

# clip 10
message_1_clip_10 = Message.create({body: "I like to collect hats from Minor League Baseball teams", user_id: six_up.id, clip_id: clip10.id})
message_2_clip_10 = Message.create({body: "Baseball > every other sport.", user_id: zjvas.id, clip_id: clip10.id})
message_3_clip_10 = Message.create({body: "doo doo doo doo", user_id: fresh_goat.id, clip_id: clip10.id})
message_4_clip_10 = Message.create({body: "Hunt: Showdown > every other shooter out there.", user_id: tonybaloney.id, clip_id: clip10.id})
message_5_clip_10 = Message.create({body: "Hunt: Showdown menu music > pretty much all other video game menu music", user_id: jessicas_dad.id, clip_id: clip10.id})
message_6_clip_10 = Message.create({body: "Seriously check it out. It's awesome.", user_id: six_up.id, clip_id: clip10.id})
message_7_clip_10 = Message.create({body: "Just google 'Rise Up Dead Man'", user_id: zjvas.id, clip_id: clip10.id})
message_8_clip_10 = Message.create({body: "The humming version is the menu music, there is one with lyrics which is also very good", user_id: the_hermit.id, clip_id: clip10.id})
message_9_clip_10 = Message.create({body: "Did anyone else spend as much time seeding as I did?", user_id: fresh_goat.id, clip_id: clip10.id})

# clip 11
message_1_clip_11 = Message.create({body: "Wooooooohoooooo seeding for the last clip!", user_id: tonybaloney.id, clip_id: clip11.id})
message_2_clip_11 = Message.create({body: "We need to have Among Us nights once the cohort is over", user_id: justblap.id, clip_id: clip11.id})
message_3_clip_11 = Message.create({body: "Team NessStache for life!", user_id: justblap.id, clip_id: clip11.id})
message_4_clip_11 = Message.create({body: "I lost the game.", user_id: justblap.id, clip_id: clip11.id})
message_5_clip_11 = Message.create({body: "I have a cat and her name is Nyx", user_id: zjvas.id, clip_id: clip11.id})
message_6_clip_11 = Message.create({body: "Boy she's a pain in the butt but I love her.", user_id: fresh_goat.id, clip_id: clip11.id})
message_7_clip_11 = Message.create({body: "I'm trying to look around the room for things to fill out the rest of this seed data", user_id: six_up.id, clip_id: clip11.id})
message_8_clip_11 = Message.create({body: "It is lunch time, maybe I should be eating.", user_id: jessicas_dad.id, clip_id: clip11.id})
message_9_clip_11 = Message.create({body: "It's pretty cold outside.", user_id: six_up.id, clip_id: clip11.id})
message_10_clip_11 = Message.create({body: "Summer > Winter", user_id: tonybaloney.id, clip_id: clip11.id})
