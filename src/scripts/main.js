import { catalog } from "./catalog.js";
import { usePlant, addPlant } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { plantSeeds } from "./tractor.js";


const yearlyPlan = createPlan()
const bigGreenTractor = plantSeeds(yearlyPlan)
const plantsInField = usePlant(bigGreenTractor)
const harvestedPlants = harvestPlants(plantsInField)
const foodHTML = catalog(harvestedPlants)

const renderCatalogToDOM = (foodHTML) => {
    const messages = document.getElementById('container')
    if (container) {
        container.innerHTML = foodHTML;
    } else {
        console.error('Could not find element with id "container"')
    }
};
renderCatalogToDOM(foodHTML);

