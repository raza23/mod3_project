# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


## 
Card.delete_all

# back1 = Card.create(name:"Back of Card",level:1,image_src:'images/cardBack.jpg')
# back2 = Card.create(name:"Back of Card",level:2,image_src:'images/cardBack.jpg')


### LEVEL 1
# curlys = Card.create(name: "Curlys", level: 1, image_src: 'images/curly_braces.png')
# square_bracket = Card.create(name: 'Square', level:1, image_src: 'images/square_brackets.png')
# vs_code = Card.create(name: 'VS Code', level:1, image_src: 'images/vs_code.jpeg')
# fat_arrow = Card.create(name: 'Fat Arrow', level:1,image_src: 'images/arrow.jpg')
# git = Card.create(name: 'Git', level: 1,image_src: 'images/github.png')
# vue = Card.create(name: 'Vue', level: 1,image_src: 'images/vue.png')
# triple_eq = Card.create(name: 'Triple Equals', level:1,image_src: 'images/strict_equals.jpg')
# variables = Card.create(name: 'Variables', level:1,image_src: 'images/var.jpg')
# no_equals = Card.create(name: "Doesn't Equals",level:1,image_src: 'images/not_equal.jpg' )
# react = Card.create(name: 'React', level:1, image_src: 'images/react.png')
# js = Card.create(name: 'JavaScript', level:1, image_src: 'images/js.png')
# angular = Card.create(name: 'Angular', level:1,image_src: 'images/angular.png')





####

raza_u = User.create(username: "Raza",clicks: '20',time: 'Timer: 4:20:00*')
justyna_u = User.create(username: "Justyna",clicks: '26',time: 'Timer: 5:00:00*')
nick_u = User.create(username: "Nick", clicks: '80', time: 'TIme: 9:23:00*')
########
justyna2 = Card.create(name: 'Justyna', level:2, image_src:'images/justynaK.jpeg')
justyna3 = Card.create(name: 'Justyna', level:3, image_src:'images/justynaK.jpeg')
raza2 = Card.create(name: 'Raza',level: 2,image_src:'images/razaS.jpeg')
raza3 = Card.create(name: 'Raza',level: 3,image_src:'images/razaS.jpeg')
mark2 = Card.create(name: 'Mark',level: 2 ,image_src:'images/Mark.jpeg')
mark3 = Card.create(name: 'Mark',level: 3 ,image_src:'images/Mark.jpeg')
alex2 = Card.create(name: 'Alex',level: 2,image_src:'images/Alex.jpeg')
alex3 = Card.create(name: 'Alex',level: 3,image_src:'images/Alex.jpeg')
andrew2 = Card.create(name: 'Andrew',level: 2,image_src: 'images/AndrewK.png')
andrew3 = Card.create(name: 'Andrew',level: 3,image_src: 'images/AndrewK.png')
nick2 = Card.create(name: 'Nick', level: 2, image_src: 'images/nick.jpeg')
nick3 = Card.create(name: 'Nick', level: 3, image_src: 'images/nick.jpeg')
andrea2 = Card.create(name: 'Andrea', level: 2,image_src: 'images/AndreaT.jpeg')
andrea3 = Card.create(name: 'Andrea', level: 3,image_src: 'images/AndreaT.jpeg')
princeton1 = Card.create(name: 'Princeton', level: 1, image_src: 'images/princeton.jpeg')
princeton3 = Card.create(name: 'Princeton', level: 3, image_src: 'images/princeton.jpeg')
hanaa1 = Card.create(name: 'Hanaa',level: 1, image_src: 'images/hanaaS.jpeg')
hanaa3 = Card.create(name: 'Hanaa',level: 3, image_src: 'images/hanaaS.jpeg')
shivang1 = Card.create(name: 'Shivang',level: 1, image_src: 'images/shivangD.png')
shivang3 = Card.create(name: 'Shivang',level: 3, image_src: 'images/shivangD.png')
evans1 = Card.create(name: 'Evans',level: 1, image_src: 'images/evansW.jpeg')
evans3 = Card.create(name: 'Evans',level: 3, image_src: 'images/evansW.jpeg')
maddie1 = Card.create(name: 'Maddie', level: 1, image_src: 'images/maddie.png')
maddie3 = Card.create(name: 'Maddie', level: 3, image_src: 'images/maddie.png')

