const fs = require('fs');
const path = require('path');

module.exports = (app) => {

    let noteData = JSON.parse(fs.readFileSync('./db/db.json'));


    app.get('/api/notes', (req, res) => res.json(noteData));


    app.post('/api/notes', (req, res) => {

        let note = req.body;

        noteData.push(note);

        addNote(noteData);
        res.json(noteData);
    });



    function addNote(noteData) {
        fs.writeFileSync('./db/db.json',
            JSON.stringify(noteData),
            (err) => (err ? console.err(err) : console.log('Your note has been added.'))
        );
    }
}
