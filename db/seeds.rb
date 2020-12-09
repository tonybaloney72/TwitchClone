# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create({email: 'demouser@email.com', username: 'SwitchDemoUser', password: '123456'})
user2 = User.create({email: 'baloney@email.com', username: 'TonyBaloney', password: '654321'})
user3 = User.create({email: 'thirduser@email.com', username: 'UserNumbahThree', password: 'NumbahThr33'})