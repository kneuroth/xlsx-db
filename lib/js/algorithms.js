
/**
 * 
 * @param {Array} arr array of unsorted integers
 * @returns lowest positive integer that is not in the array
 *  
 */
 function getLowestIntNotIn(arr){
    if (arr.length == 0){
        return 0;
    }
    let lowest = 0;
    let map = {};
    for(let i = 0; i < arr.length; i++){
        map[arr[i]] = true;
    }

    while(map[lowest]){
        lowest++;
    }

    return lowest;

}

/**
 * 
 * @param {Object} A Non-nested JS object
 * @param {Object} B Non-nested JS object
 * @returns true if A and B have the same data (does not work for nested objects)
 * For every key in A, check if B has the same key, and check if A[key] is equal to B[key]
 */
function haveSameData(A, B){
    let aKeys = Object.keys(A);
    let bKeys = Object.keys(B);

    if(aKeys.length == bKeys.length){
        if (aKeys.every( (key) => B.hasOwnProperty(key) && A[key] == B[key] ) ){
            return true;
        }
    }
    return false;

}

export default { getLowestIntNotIn, haveSameData }