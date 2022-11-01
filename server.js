/*********************************************************************************
* WEB322 – Assignment 06
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
of this
* assignment has been copied manually or electronically from any other source (including web sites)
or
* distributed to other students.
*
* Name: _______ELDAR_______________ Student ID: _____
130285216_________ Date: ______10/31/2022__________
*
* Online (Cyclic) Link: ________________________________________________________
*
********************************************************************************/ 


const HTTP_PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});
app.get('/audio', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/audio.html"));
});
app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/video.html"));
});
app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/table.html"));
});
app.get('/list', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/list.html"));
});
app.get('/storefront', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/storefront.html"));
});

try{
    app.listen(HTTP_PORT, () => 
    {console.log("server listening on port: " + HTTP_PORT)}
    );
}
catch(err){
    console.log("Fail to Start: "+ err);
}


