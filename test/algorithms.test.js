import assert from "assert";

import Algorithms from "../lib/js/algorithms.js";



describe('Algorithms', () => {
    describe('#getLowestIntNotIn', () => {
        it('Returns 1 when given [0, 2, 3]. Handles case when the lowest int is between 2 numbers in the array..', () => {
            assert.equal(Algorithms.getLowestIntNotIn([0, 2, 3]), 1);    
        })
        it('Returns 0 when given [1, 2, 3]. Handles case when lowest int is below the lowest in the array.', () => {
            assert.equal(Algorithms.getLowestIntNotIn([1, 2, 3]), 0); 
        })
        it('Returns 0 when given [3, 2, 1]. Handles case when lowest int not in array is below lowest in the array and array is not sorted.', () => {
            assert.equal(Algorithms.getLowestIntNotIn([3, 2, 1]), 0); 
        })
        it('Returns 1 when given [3, 0, 2]. Handles case when lowest int not in array is between 2 numbers and the array is not sorted.', () => {
            assert.equal(Algorithms.getLowestIntNotIn([3, 0, 2]), 1); 
        })
        it('Returns 4 when given [0, 1, 2, 3]. Handles case when lowest int not in array is greater than highest int in array.', () => {
            assert.equal(Algorithms.getLowestIntNotIn([0, 1, 2, 3]), 4); 
        })
        it('Returns 0 when given [-1, -2, -3]. Hanldes case when array is all negative.', () => {
            assert.equal(Algorithms.getLowestIntNotIn([-1, -2, -3]), 0); 
        })
        it('Returns 4 when given [-1, 2, 0, 1, 3, -3]. Handles case when array is mixed negative and positive integers.', () => {
            assert.equal(Algorithms.getLowestIntNotIn([-1, 2, 0, 1, 3, -3]), 4); 
        })
        it('Returns 0 when given an empty array. Handles case when array is empty (lowest int not in an empty array is 0).', () => {
            assert.equal(Algorithms.getLowestIntNotIn([]), 0);
        })

    })
    describe('#haveSameData', () => {
        it('Returns true for { A: 1 } and { A: 1}. Handles case for 2 identical objects.', () => {
            assert.equal(Algorithms.haveSameData({A: 1}, {A: 1}), true);
        })
        it('Returns false for { A: 1 } and { A: 2 }. Handles case for 2 objects with different data but same key.', () => {
            assert.equal(Algorithms.haveSameData({A: 1}, {A: 2}), false);
        })
        it('Returns false for { A: 1 } and { A: 1, B: 1 }. Handles case where B is the same as A but with an extra property.', () => {
            assert.equal(Algorithms.haveSameData({A: 1}, {A: 1, B: 1}), false);
        })
        it('Returns false for { A: 1, B: 1 } and { A: 1 }. Handles case where A is the same as B but with an extra property.', () => {
            assert.equal(Algorithms.haveSameData({A: 1, B: 1}, {A: 1}), false);
        })
        it('Returns false for { A: 1, B: 1 } and { A: 1, B: 2 }. Handles case where 1 set of values is different.', () => {
            assert.equal(Algorithms.haveSameData({A: 1, B: 1}, {A: 1, B: 2}), false);
        })
        it('Returns true for {} and {}. Handles case where neither A or B have any properties.', () => {
            assert.equal(Algorithms.haveSameData({}, {}), true);
        })
        it('Returns false for { A: 1 } and {}. Handles case where B has no properties.', () => {
            assert.equal(Algorithms.haveSameData({ A: 1 }, {}), false);
        })
        it('Returns false for {} and { B : 1 }. Handles case where A has no properties.', () => {
            assert.equal(Algorithms.haveSameData({}, { B: 1 }), false);
        })
    })
})
