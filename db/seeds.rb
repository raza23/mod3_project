# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


## 

back1 = Card.create(name:"Back of Card",level:1,image_src:'images/cardBack.jpg')
back2 = Card.create(name:"Back of Card",level:2,image_src:'images/cardBack.jpg')


### LEVEL 1
curlys = Card.create(name: "Curlys", level: 1, image_src: 'images/curly_braces.png')
square_bracket = Card.create(name: 'Square', level:1, image_src: 'images/square_brackets.png')
vs_code = Card.create(name: 'VS Code', level:1, image_src: 'images/vs_code.jpeg')
fat_arrow = Card.create(name: 'Fat Arrow', level:1,image_src: 'images/arrow.jpg')
git = Card.create(name: 'Git', level: 1,image_src: 'images/github.png')
vue = Card.create(name: 'Vue', level: 1,image_src: 'images/vue.png')
triple_eq = Card.create(name: 'Triple Equals', level:1,image_src: 'images/strict_equals.jpg')
variables = Card.create(name: 'Variables', level:1,image_src: 'images/var.jpg')
no_equals = Card.create(name: "Doesn't Equals",level:1,image_src: 'images/not_equal.jpg' )
react = Card.create(name: 'React', level:1, image_src: 'images/react.png')
js = Card.create(name: 'JavaScript', level:1, image_src: 'images/js.png')
angular = Card.create(name: 'Angular', level:1,image_src: 'images/angular.png')


## LEVEL 2 
justyna = Card.create(name: 'Justyna', level:2, image_src:'images/justynaK.jpeg')
raza = Card.create(name: 'Raza',level: 2,image_src:'images/razaS.jpeg')
mark = Card.create(name: 'Mark',level: 2 ,image_src:'images/Mark.jpeg')
alex = Card.create(name: 'Alex',level: 2,image_src:'images/Alex.jpeg')
andrew = Card.create(name: 'Andrew',level: 2,image_src: 'images/AndrewK.png')
nick = Card.create(name: 'Nick', level:2,image_src: 'images/NickL.png')
andrea = Card.create(name: 'Andrea', level: 2,image_src: 'images/AndreaT.jpeg')
princeton = Card.create(name: 'Princeton', level:2, image_src: 'images/princeton.jpeg')
hanaa = Card.create(name: 'Hanaa',level:2,image_src: 'images/hanaaS.jpeg')
shivang = Card.create(name: 'Shivang',level:2,image_src: 'images/shivangD.png')
evans = Card.create(name: 'Evans',level:2, image_src: 'images/evansW.jpeg')