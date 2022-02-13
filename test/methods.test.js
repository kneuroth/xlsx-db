import assert from "assert";

import methods from "../lib/xlsx/methods.js";;
import init_test_files from "./initializeTestFiles.js";
import algorithms from "../lib/js/algorithms.js";


init_test_files()
describe('Methods', () => {

    describe('#findById', () => {
        // FIND BY ID TEST 1
        it('Finds a single record with id 0.', () => {
            assert.equal(algorithms.haveSameData(methods.findById(0, 'testFiles/findById-test-1.xlsx'), { id: 0, test: 'A' }), true);
        })
        // FIND BY ID NON-EXISTANT TEST (2)
        it('Throws an error when passing a non-existant filepath', () => {
            assert.throws(() => { methods.findById(0, 'testfiles/nonexistant.xlsx') });
        })
    })

    describe('#find', () => {

        //FIND TEST 1
        it('Returns all records in a sheet.', () => {
            let result = methods.find('testFiles/find-test-1.xlsx');
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

        // FIND TEST 2
        it('Returns an empty array when passed a completely empty sheet.', () => {
            assert.equal(methods.find('testFiles/find-test-2.xlsx').length, 0);
        })

        // FIND TEST 3
        it('Returns an empty array when passed a sheet with keys but no values.', () => {
            assert.equal(methods.find('testFiles/find-test-3.xlsx').length, 0);
        })
        // FIND NON-EXISTANT TEST (4)
        it('Throws an error when passed non-existant filepath.', () => {
            assert.throws(() => { methods.find('testFiles/nonexistant.xlsx')});
        })
    })

    
    describe('#post', () => {
        
        it('Adds a single record to posst-test-1-empty.xlsx', () => {
            assert.equal(algorithms.haveSameData(methods.post({ test: "A" }, 'testFiles/post-test-1-empty.xlsx'), { id: 0, test: 'A' }), true);
        })

        it('Adds a single record to post-test-1-has-one.xlsx with id 1', () => {
            assert.equal(algorithms.haveSameData( methods.post({ test: "A" }, 'testFiles/post-test-2-has-one.xlsx'),{ id: 1 , test: 'A'}), true);
        })

        it('Throws an error when passing a non-existant filepath', () => {
            assert.throws(() => { methods.post({ test: "A" }, 'testFiles/nonexistant.xlsx') });
        })

    })

    describe('#patch', () => {
        
        it('Updates a single record with a change to col1, excludes col2', () => {
            assert.equal(algorithms.haveSameData(methods.patch({ id: 0, col1: "C" }, 'testFiles/patch-test-1.xlsx'), { id: 0, col1: 'C', col2: 'B' }), true);
        })
        it('Updates a single record with a change to col1, includes col2', () => {
            assert.equal(algorithms.haveSameData(methods.patch({ id: 0, col1: "C", col2:"B" }, 'testFiles/patch-test-2.xlsx'), { id: 0, col1: 'C', col2: 'B' }), true);
        })

    })

     
})
