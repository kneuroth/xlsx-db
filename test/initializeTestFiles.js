import xlsx from 'xlsx'
import methods from '../lib/xlsx/methods.js';

export default function init_test_files() {

    // Post tests
    methods.clear('testFiles/post-test-1-empty.xlsx');
    methods.populate([{id: 0, test: 'A'}], 'testFiles/post-test-2-has-one.xlsx');

    // Patch tests
    methods.populate([
        {id: 0, col1: 'A', col2: 'B'}
    ], 'testFiles/patch-test-1.xlsx')
    methods.populate([
        {id: 0, col1: 'A', col2: 'B'}
    ], 'testFiles/patch-test-2.xlsx')


}