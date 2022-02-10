import assert from "assert";

import methods from "../lib/xlsx/methods.js";;
import init_test_files from "./initializeTestFiles.js";
import algorithms from "../lib/js/algorithms.js";


init_test_files()
describe('Methods', () => {

    
    describe('#post', () => {
        
        it('Adds a single record to empty.xlsx', () => {
            let result = methods.post({ test: "A" }, 'testFiles/empty.xlsx');
            assert.equal(result.id, 0);
            assert.equal(result.test, "A");
        })

        it('Adds a single record to hasOne.xlsx with id 1', () => {
            let result = methods.post({ test: "A" }, 'testFiles/hasOne.xlsx');
            assert.equal(result.id, 1);
            assert.equal(result.test, "A");
        })

        it('Throws an error when passing a non-existant filepath', () => {
            assert.throws(() => { methods.post({ test: "A" }, 'testFiles/nonexistant.xlsx') });
        })

        
    })

    describe('#find', () => {
        it('Returns all records in a sheet', () => {
            let result = methods.find('testfiles/findAll.xlsx');
            let expected = [
                {
                    id: 0,
                    test: 'A'
                },
                {
                    id: 1,
                    test: 'B'
                }
            ]
            for(let i = 0; i < result.length; i++){
                assert.equal(algorithms.haveSameData(expected[i], result[i]), true)
            }
        })
    })
})
