"use strict";

const express = require("express");
const io = require("socket.io");

const app = express.app();
const socket = io();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {

    let users = [];

    socket.on("contract", user => {
        users[user.id] = user.name;
    });

    socket.on("chat", msg => {
        const name = users[socket.id];
        io.emit("chat", {
            name: name,
            content: msg
        });
    });

    socket.on("draw", img => {
        io.emit("draw", {
            diff: img
        });
    });

});
