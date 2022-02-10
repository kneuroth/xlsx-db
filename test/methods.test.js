import assert from "assert";

import methods from "../lib/xlsx/methods.js";;
import init_test_files from "./initializeTestFiles.js";
import algorithms from "../lib/js/algorithms.js";


init_test_files()
describe('Methods', () => {

    describe('#findById', () => {

        it('Finds a single record with id 0.', () => {
            assert.equal(algorithms.haveSameData(methods.findById(0, 'testFiles/findByIdTest1.xlsx'), { id: 0, test: 'A' }), true);
        })

        it('Throws an error when passing a non-existant filepath', () => {
            assert.throws(() => { methods.findById(0, 'testfiles/nonexistant.xlsx') });
        })
    })

    
    describe('#post', () => {
        
        it('Adds a single record to empty.xlsx', () => {
            assert.equal(algorithms.haveSameData(methods.post({ test: "A" }, 'testFiles/empty.xlsx'), { id: 0, test: 'A' }), true);
        })

        it('Adds a single record to hasOne.xlsx with id 1', () => {
            assert.equal(algorithms.haveSameData( methods.post({ test: "A" }, 'testFiles/hasOne.xlsx'),{ id: 1 , test: 'A'}), true);
        })

        it('Throws an error when passing a non-existant filepath', () => {
            assert.throws(() => { methods.post({ test: "A" }, 'testFiles/nonexistant.xlsx') });
        })

    })

    describe('#find', () => {

        it('Returns all records in a sheet', () => {
            let result = methods.find('testFiles/findAll.xlsx');
            let expected = [
                {
                    id: 0,
                    test: 'A'
                },
                {
                    id: 1,
                    test: 'B'
                }
            ];
            for(let i = 0; i < result.length; i++){
                assert.equal(algorithms.haveSameData(expected[i], result[i]), true);
            }
        })

        it('Throws an error when passed non-existant filepath', () => {
            assert.throws(() => { methods.find('testFiles/nonexistant.xlsx')});
        })
    })
})
