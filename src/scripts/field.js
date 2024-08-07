const plants = []

export const addPlant = (seed) =>{
    if (Array.isArray(seed) === true) {
        for (const seed of corn) {
            plants.push(corn)
        }
    }
    else (plants.push(seed)) 

}

export const usePlant = () => {

    return plants.slice()
}
