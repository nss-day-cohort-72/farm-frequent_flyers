export const harvestPlants = (growingPlants) => {
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
                output: plant.output
            })
        }
    } return harvest;
}   