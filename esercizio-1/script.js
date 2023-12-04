class User {
    constructor(name, lastName, age, location) {
        this.firstName = name
        this.lastName = lastName
        this.age = age
        this.location = location
    }

    compareAge(otherUser) {
        return this.age > otherUser.age
    }   
}

const user1 = new User("Davide", "Bianchi", 60, "Napoli")
const user2 = new User("Fabrizio", "Verdi", 50, "Pescara")
const user3 = new User("Pippo", "Rossini", 25, "Trapani")
const user4 = new User("Carlo","Magno", 17, "Roma")
const user5 = new User("Alessandro", "Il Grande", 37,"Parma")
