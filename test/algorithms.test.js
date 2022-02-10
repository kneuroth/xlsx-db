import assert from "assert";

import Algorithms from "../lib/js/algorithms.js";



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
        it('should return 0 when given an empty array', () => {
            assert.equal(Algorithms.getLowestAvailableInt([]), 0);
        })

    })
    describe('#haveSameData', () => {
        it('should return true for { A: 1 } and { A: 1}', () => {
            assert.equal(Algorithms.haveSameData({A: 1}, {A: 1}), true);
        })
        it('should return false for { A: 1 } and { A: 2 }', () => {
            assert.equal(Algorithms.haveSameData({A: 1}, {A: 2}), false);
        })
        it('should return false for { A: 1 } and { A: 1, B: 1 }', () => {
            assert.equal(Algorithms.haveSameData({A: 1}, {A: 1, B: 1}), false);
        })
        it('should return false for { A: 1, B: 1 } and { A: 1 }', () => {
            assert.equal(Algorithms.haveSameData({A: 1, B: 1}, {A: 1}), false);
        })
        it('should return false for { A: 1, B: 1 } and { A: 1, B: 2 }', () => {
            assert.equal(Algorithms.haveSameData({A: 1, B: 1}, {A: 1, B: 2}), false);
        })
        it('should return true for {} and {}', () => {
            assert.equal(Algorithms.haveSameData({}, {}), true);
        })
    })
})
