
/**
 * 
 * @param {*} arr array of unsorted integers
 * @returns lowest positive integer that is not in the array
 *  
 */
 function getLowestAvailableInt(arr){
    if (arr.length == 0){
        throw Error('Algorithms.getLowestAvailableInt: Array is empty')
    }
    let lowest = 0;
    let map = {};
    for(let i = 0; i < arr.length; i++){
        map[arr[i]] = true;
    }

    while(map[lowest]){
        lowest++;
    }

    return lowest

}

export default { getLowestAvailableInt }