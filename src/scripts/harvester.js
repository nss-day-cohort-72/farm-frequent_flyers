export const harvestPlants = (growingPlants) => {
    let primaryKeyId = 1
    const harvest = [];
    
    for (const plant of growingPlants) {
        let output = 0
        if (plant.type === "Corn") {
           output = plant.output / 2
            
        } else {
            output = plant.output
        }
        for (let i = 0; i < output; i++) {
            harvest.push({
                type: plant.type,
                height: plant.height,
                output: plant.output,
                id: primaryKeyId++
            })
        }
    } 
    harvest.sort((a, b) => a.type.localeCompare(b.type));

    return harvest
}   
