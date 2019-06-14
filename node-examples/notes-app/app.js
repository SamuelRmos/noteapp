const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    handler: function(){
        console.log('Removing the note')
    }
})

console.log(yargs.argv)




// const add = require('./utils.js')
// const sum = add(4,4)
// console.log(sum)



