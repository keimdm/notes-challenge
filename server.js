const express = require('express');
const fs = require("fs");
const path = require('path');
const PORT = process.env.PORT || 3001;
const generateID = require('generate-unique-id');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        res.json(JSON.parse(data));
    });

});

app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newEntry = {
            title: title,
            text: text,
            id: generateID({
                length: 20,
                useLetters: true
            })
        }
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            let dataArray = JSON.parse(data);
            dataArray.push(newEntry);

            fs.writeFile("./db/db.json", JSON.stringify(dataArray), (err, data) =>  {
                res.json("Note successfully added!");
            });
        });
    }
    else {
        res.json("Failed to add note - please try again.");
    }
});

app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    if (id) {
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            let dataArray = JSON.parse(data);
            let indexToRemove;
            for (i = 0; i < dataArray.length; i++) {
                if (dataArray[i].id === id) {
                    indexToRemove = i;
                }
            }
            if (typeof indexToRemove !== undefined) {
                dataArray.splice(indexToRemove, 1);
            }
            fs.writeFile("./db/db.json", JSON.stringify(dataArray), (err, data) =>  {
                res.json("Note successfully removed!");
            });
        });
    }
    else {
        res.json("Failed to add note - please try again.");
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
  