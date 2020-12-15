require 'open-uri'

User.delete_all
Category.delete_all
Clip.delete_all

demo_user = User.create({email: 'demouser@email.com', username: 'SwitchDemoUser', password: '123456'})
tonybaloney = User.create({email: 'baloney@email.com', username: 'TonyBaloney', password: '654321'})
the_hermit = User.create({email: 'thirduser@email.com', username: 'TheHermit', password: 'hermit321'})
jessicas_dad = User.create({email: 'thirduser@email.com', username: 'JessicasDad', password: 'neenoh123'})
zorngeist = User.create({email: 'thirduser@email.com', username: 'Zorngeist', password: 'psycho456'})
fresh_goat = User.create({email: 'thirduser@email.com', username: 'FreshGoat', password: 'boxygoat'})
its_ufah = User.create({email: 'thirduser@email.com', username: 'itsUfah', password: 'itshafu'})
six_up = User.create({email: 'thirduser@email.com', username: '6uuup', password: '5up321'})
zjvas = User.create({email: 'thirduser@email.com', username: 'Zjvas', password: 'savjz8'})



hunt = Category.create({title: 'Hunt: Showdown'})
among = Category.create({title: 'Among Us'})
hearth = Category.create({title: 'Hearthstone'})
sot = Category.create({title: 'Sea of Thieves'})

hunt_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/Hunt_Showdown.jpg')
among_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/Among_Us.jpg')
hearth_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/Hearthstone.jpg')
sot_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/Sea_of_Thieves.jpg')

hunt.image.attach(io: hunt_file, filename: 'Hunt_Showdown.jpg')
among.image.attach(io: among_file, filename:'Among_Us.jpg')
hearth.image.attach(io: hearth_file, filename: 'Hearthstone.jpg')
sot.image.attach(io: sot_file, filename: 'Sea_of_Thieves.jpg')



clip1 = Clip.create({user_id: fresh_goat.id, category: sot.title, title: "Boarding the enemy vessel... poorly"})
clip2 = Clip.create({user_id: demo_user.id, category: hunt.title, title: "Pitchfork funtimes Part 1"})
clip3 = Clip.create({user_id: demo_user.id, category: hunt.title, title: "Pitchfork funtimes Part 2"})
clip4 = Clip.create({user_id: six_up.id, category: among.title, title: "Cult of the Tree"})
clip5 = Clip.create({user_id: zjvas.id, category: hearth.title, title: "Never laki"})

clip1_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/boxy_upload_this.mp4')
clip2_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/pitchfork_1.mp4')
clip3_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/pitchfork_2.mp4')
clip4_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/cult_of_tree.mp4')
clip5_file = open('https://switch-seeds.s3-us-west-1.amazonaws.com/never_laki.mp4')

clip1.video_clip.attach(io: clip1_file, filename: 'boxy_upload_this.mp4')
clip2.video_clip.attach(io: clip2_file, filename: 'pitchfork_1.mp4')
clip3.video_clip.attach(io: clip3_file, filename: 'pitchfork_2.mp4')
clip4.video_clip.attach(io: clip4_file, filename: 'cult_of_tree.mp4')
clip5.video_clip.attach(io: clip5_file, filename: 'never_laki.mp4')