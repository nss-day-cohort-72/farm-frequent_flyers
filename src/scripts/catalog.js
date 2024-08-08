export const catalog = (harvestedFood) => {
    
    let foodHTML = ''
    for (const food of harvestedFood) {

        foodHTML += `

            <section class="plant"> ${food.type} </section>`
        
    }
    return foodHTML;

}