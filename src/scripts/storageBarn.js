const barn = () => {
    let storageBarn = []
    return {
        push: (crop) => {
            return `${type} added to the storage barn.` 
        },
        pop: () => {
            if (storageBarn.length === 0){
            return `The storage barn is empty`
            } else {
                return `${type} was removed from the storage barn`
            }
        },
        peek: () => {
            const lastCrop = storageBarn[storageBarn.length - 1];
            return `${type} is the type of crop that was last added to the storage barn`
        },
        isEmpty: () => {
           if (storageBarn === 0) {
            return 'The storage barn is empty'
           } else {
            return 'The storage barn has produce'
           }    
        } 
                
    }
}
