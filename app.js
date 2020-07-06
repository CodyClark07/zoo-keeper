let kenaiRiver = []
let kenaiLake = []
class Salmon {
    constructor(
        name = '',
        commonName = '',
        weight = 0,
        length = 0,
        spawned = false,
        color = ''
    ) {
        this.name = name
        this.commonName = commonName
        this.weight = weight
        this.length = length
        this.spawned = spawned
        this.color = color
    }
}

let red = new Salmon("Red", "Sockeye", 9, 24, false, "silver")
let silver = new Salmon("Silver", "Coho", 16, 28, false, "Silver w/ black spots on tail")
let king = new Salmon("King", "Chinook", 50, 44, false, "silver w/ black spots on tail and back")
let pink = new Salmon("Pink", "Humpback", 7, 20, true, "red body with green hump")

class Rivers {
    constructor(salmon) {
        this.salmon = salmon
    }
    spawned() {
        this.salmon.forEach((fish) => {
            if (fish.spawned == false) {
                console.log("Still swimmin")
                kenaiRiver.push(fish)
            }
            else if (fish.spawned == true) {
                kenaiLake.push(fish)
            }
        })
    }
}
let river = new Rivers([red, silver, king, pink])

river.spawned()