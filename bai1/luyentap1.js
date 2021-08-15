var character = {
    name:"Duma",
    hair:"red",
}

character.hair = 'blue'

// console.log(character)

var person={
    firstName:"CuongDo",
    lastname:"HuyNguyen",
    fullName:function(){
        return this.firstName + " " + this.lastName
    }
}

person.fullName()
console.log(fullName())
