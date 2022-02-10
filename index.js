import methods from './lib/xlsx/methods.js';

console.log(methods.findById(0, "testFiles/findByIdTest1.xlsx"));


export default {
    
    FindById: methods.findById, 
    Find: methods.find, 
    Post: methods.post, 
    Remove: methods.remove, 
    Patch: methods.patch 

}


