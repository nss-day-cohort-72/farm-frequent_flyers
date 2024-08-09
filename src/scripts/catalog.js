export const catalog = (harvestedFood) => {
    /*create object to keep track of how many times each 
    food type appears*/
    const foodCount = {};
    /*loop through 'harvestedFood', checking if the food type
    already exists in 'foodCount'*/
    for (const food of harvestedFood) {
        if (foodCount[food.type]) {
        //If it does, we increase the count by 1  
            foodCount[food.type] += 1;
        } else {
            foodCount[food.type] = 1;
        //If it doesn't, we set the count to 1               
        }
    }

    let foodHTML = ''
    for (const type in foodCount) { 
    /*The 'for...in' loop is used to iterate over the keys of an object.
    In this case, it iterates over the plant types stored in the foodCounts object */
        foodHTML += `

            <section class="plant"> ${type}: ${foodCount[type]} </section>`
        
    }
    return foodHTML;

}