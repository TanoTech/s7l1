class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }

    hasSameOwner(anotherPet) {
        return this.ownerName === anotherPet.ownerName
    }
}

const pets = [];

function addPet() {
    const petName = document.getElementById('petName').value
    const ownerName = document.getElementById('ownerName').value
    const species = document.getElementById('species').value
    const breed = document.getElementById('breed').value

    const newPet = new Pet(petName, ownerName, species, breed)
    if (petName && ownerName && species && breed) {
        pets.push(newPet)
        displayPets()
        clearForm()
    } else {
        alert('complete all the form to continue')
    }
}

function displayPets() {
    const petList = document.getElementById('petList')
    petList.innerHTML = ''

    pets.forEach(pet => {
        const listItem = document.createElement('li')
        listItem.textContent = `Pet: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`
        petList.appendChild(listItem)
    })
}

function clearForm() {
    document.getElementById('petName').value = ''
    document.getElementById('ownerName').value = ''
    document.getElementById('species').value = ''
    document.getElementById('breed').value = ''
}

console.log(pets);



