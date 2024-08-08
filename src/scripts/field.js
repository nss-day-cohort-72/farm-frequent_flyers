const plants = []

export const addPlant = (seeds) =>{
    if (Array.isArray(seeds) === true) {
        for (const seeds of corn) {
            plants.push(corn)
        }
    }
    else (plants.push(seeds)) 

}

export const usePlant = () => {

    const growingPlants = plants.slice()
    
    return growingPlants
}
