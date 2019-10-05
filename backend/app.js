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
        users[socket.id] = user.name;
    });

    socket.on("chat", content => {
        io.emit("chat", {
            name: users[socket.id],
            content: content
        });
    });

    socket.on("draw", img => {
        io.emit("draw", {
            diff: img
        });
    });

});
