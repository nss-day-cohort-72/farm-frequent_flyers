import { usePlant, addPlant } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { plantSeeds } from "./tractor.js";


const yearlyPlan = createPlan()
const seedPlants = plantSeeds(yearlyPlan)
const bigGreenTractor = usePlant(seedPlants)
const harvestedPlants = harvestPlants(bigGreenTractor)
console.log(harvestedPlants)