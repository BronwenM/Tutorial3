/*const sum = (num1, num2) => {
    return num1+num2;
}
const result = sum(2, 3);
console.log(result);

const fs = require('fs');
const generateFile = () => {
    try {
        fs.writeFileSync('data.txt', "Hi, this file was made with Node");
    } catch (error) {
        console.log(error);
    }
}
generateFile();

const http = require('http');
http.createServer(function (req, res) {
    res.write('Server starterd. Hi!!');
    res.end();
}).listen(8080);

const newModule = require('./newModule');
const date = newModule();
 console.log(date); */

//require express
const express = require('express');

//init express app
const app = express();

//set listen port to localhost:8080
const port = 8080;

//API urls
app.get('/', (req, res) => {
    res.send("Hi from the express server!");
});

app.get('/api/cats', (req, res) => {
    //call to db

    //return dummy data in JSON format
    const cats = ["British Shorthair", "Ragdoll", "Russian Blue"];
    res.send(cats);
});

//running the app on port 8080
app.listen(port, () => {
    console.log("Listening on port ", port);
});