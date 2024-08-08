import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"

export const plantSeeds = (plan) => {
    const seeds = [];
    for (let i = 0; i < plan.length; i++) {
        let rows = plan[i];

        for ( const row of rows ) {
            if ( row.includes("Soybean")) {
                seeds.push(createSoybean())
            }
            else if 
                ( row.includes("Corn")) {
                    let cornPlant = createCorn()
                    seeds.push(...cornPlant)
            }
            else if
                ( row.includes("Asparagus")) {
                    seeds.push(createAsparagus())
            }
            else if
                ( row.includes("Wheat")) {
                    seeds.push(createWheat())
            }   
            else if
                ( row.includes("Potato")) {
                    seeds.push(createPotato())
            }    
            else if
                ( row.includes("Sunflower")) {
                    seeds.push(createSunflower())
            }   
            
            
        };
    };
    return seeds;
};