import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant } from "./field.js";

export const plantSeeds = (plan) => {

    for (let i = 0; i < plan.length; i++) {
        let rows = plan[i];

        for ( const row of rows ) {
            if ( row.includes("Soybean")) {
                addPlant(createSoybean())
            }
            else if 
                ( row.includes("Corn")) {
                    let cornPlant = createCorn()
                    addPlant(...cornPlant)
            }
            else if
                ( row.includes("Asparagus")) {
                    addPlant(createAsparagus())
            }
            else if
                ( row.includes("Wheat")) {
                    addPlant(createWheat())
            }   
            else if
                ( row.includes("Potato")) {
                    addPlant(createPotato())
            }    
            else if
                ( row.includes("Sunflower")) {
                    addPlant(createSunflower())
            }   
            
            
        };
    };
};