const fs = require('fs')
const chalk = require('chalk')


//Function to add a note
const addNote = (title, body) => {

    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    const duplicateNotes = notes.filter((note) => { return note.title === false })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Title entry already exists!!')
    }

}

//Function to remove a note 
const removeNote = function (title) {
    const notes = loadNotes();
    const newNotesArray = notes.filter((note) => { return note.title !== title })

    if (notes.length > newNotesArray.length) {
        console.log(chalk.green('Notes has been removed !!'))
        saveNotes(newNotesArray)

    } else {
        console.log(chalk.red("Node with title : " + title + '  does not exists'));
    }

}


//Function to list all the notes
const listNotes = function () {
    const noteListJSON = loadNotes();

    noteListJSON.forEach(element => {
        console.log(element.title)
    });

}


//function to read the note data
const readNotes = (title) => {
    const noteListJSON = loadNotes();
    const note = noteListJSON.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title) + ' : ' + chalk.inverse(note.body))
    } else {
        console.log(chalk.red('Note not found !!'))
    }

}

//utitliy function to save a note back to the file system
const saveNotes = (notes) => {
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataString)

}
//utility functions to load the notes from the file system

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }


}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNotes,
    readNote: readNotes
}