#hunt.image.attach(io: File.open("/mnt/c/Users/TonyB/Documents/Switch-Data/Categories/Hunt_Showdown.jpg"), filename: "Hunt_Showdown.jpg")

User.delete_all

demo_user = User.create({email: 'demouser@email.com', username: 'SwitchDemoUser', password: '123456'})
tonybaloney = User.create({email: 'baloney@email.com', username: 'TonyBaloney', password: '654321'})
the_hermit = User.create({email: 'thirduser@email.com', username: 'TheHermit', password: 'hermit321'})
jessicas_dad = User.create({email: 'thirduser@email.com', username: 'JessicasDad', password: 'neenoh123'})
zorngeist = User.create({email: 'thirduser@email.com', username: 'Zorngeist', password: 'psycho456'})
fresh_goat = User.create({email: 'thirduser@email.com', username: 'FreshGoat', password: 'boxygoat'})
its_ufah = User.create({email: 'thirduser@email.com', username: 'itsUfah', password: 'itshafu'})
six_up = User.create({email: 'thirduser@email.com', username: '6uuup', password: '5up321'})
zjvas = User.create({email: 'thirduser@email.com', username: 'Zjvas', password: 'savjz8'})

