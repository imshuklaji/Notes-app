const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },

    // handler: function (argv) {
    //     console.log('Adding a new note...! ');
    //     notes.addNote(argv.title, argv.body)
    // }

    handler: (argv) => {
        console.log('Adding a new note...! ');
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },

    // handler: function (argv) {
    //     console.log('Removing the note'),
    //         notes.removeNote(argv.title)
    // }

    handler: (argv) => { notes.removeNote(argv.title) }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    // handler: function () {
    //     console.log('Listing out all notes')
    // }
    //changes done to cater ES6 method definiton
    handler() {
        console.log(chalk.green.inverse('Listing out all notes'))
        notes.listNote()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    // handler: function () {
    //     console.log('Reading a note')
    // }

    //changes done to cater ES6 method definiton
    handler() {
        console.log('Reading a note')
    }
})

yargs.parse();
//console.log(yargs.argv)
