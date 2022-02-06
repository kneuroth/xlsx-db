import methods from './lib/xlsx/methods.js'
methods.post({test: "A"}, 'testFiles/neverExists.xlsx')
//console.log('Current directory: ' + process.cwd());