const fs = require('fs')
const chalk = require('chalk')


//Function to add a note
const addNote = function (title, body) {

    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

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
    const newNotesArray = notes.filter(function (note){
        return note.title !== title
    })

    if(notes.length > newNotesArray.length){
        console.log(chalk.green('Notes has been removed !!'))
        saveNotes(newNotesArray)

    }else{
        console.log(chalk.red("Node with title : "+title+'  does not exists'));
    }

}


//Function to list all the notes
const listNotes = function () {

}


//function to read the note data
const readNotes = function () {

}

//utitliy function to save a note back to the file system
const saveNotes = function (notes) {
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataString)

}
//utility functions to load the notes from the file system

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }


}




const getNotes = function () {
    //console.log('Your notes ....');
    return "Your notes ..."
}








module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote
}