import { usePlant, addPlant } from "./field.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";


//yearlyPlan = createPlan()
let asparagus = {type: 'Asparagus',
    height: 24,
    output: 4    
}
addPlant(asparagus)

const plant = usePlant()
console.log(plant)