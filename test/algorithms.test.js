import assert from "assert"

import Algorithms from "../lib/js/algorithms.js"



describe('Algorithms', () => {
    describe('#getLowestAvailableInt', () => {
        it('should return 1 when given [0, 2, 3]', () => {
            assert.equal(Algorithms.getLowestAvailableInt([0, 2, 3]), 1);    
        })
        it('should return 0 when given [1, 2, 3]', () => {
            assert.equal(Algorithms.getLowestAvailableInt([1, 2, 3]), 0); 
        })
        it('should return 0 when given [3, 2, 1]', () => {
            assert.equal(Algorithms.getLowestAvailableInt([3, 2, 1]), 0); 
        })
        it('should return 1 when given [3, 0, 2]', () => {
            assert.equal(Algorithms.getLowestAvailableInt([3, 0, 2]), 1); 
        })
        it('should return 4 when given [0, 1, 2, 3]', () => {
            assert.equal(Algorithms.getLowestAvailableInt([0, 1, 2, 3]), 4); 
        })
        it('should return 0 when given [-1, -2, -3]', () => {
            assert.equal(Algorithms.getLowestAvailableInt([-1, -2, -3]), 0); 
        })
        it('should return 4 when given [-1, 2, 0, 1, 3, -3]', () => {
            assert.equal(Algorithms.getLowestAvailableInt([-1, 2, 0, 1, 3, -3]), 4); 
        })
        it('should throw an error when given empty array', () => {
            assert.throws(() => { Algorithms.getLowestAvailableInt([]) }, Error)
        })

    })
})
