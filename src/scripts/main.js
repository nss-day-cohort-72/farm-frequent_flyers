import { usePlant, addPlant } from "./field.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { plantSeeds } from "./tractor.js";


const yearlyPlan = createPlan()
const seedPlants = plantSeeds(yearlyPlan)
console.log(seedPlants)