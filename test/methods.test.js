import assert from "assert"

import methods from "../lib/xlsx/methods.js"
import init_test_files from "./initializeTestFiles.js"



describe('Methods', () => {

    //init_test_files()
    describe('#post', () => {
        
        it('should add a record', () => {
            assert.notStrictEqual(methods.post({test: "A"}, 'testFiles/empty.xlsx'), {id: 0, test: "A"})
        })
    })
})