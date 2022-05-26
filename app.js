"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const socket = (0, socket_io_client_1.io)('http://35.193.128.246:' + 5000);
//const socket = io('http://localhost:' + 5000);
// 接続時にこのイベントが発火する
socket.on('connect', () => console.log('connect'));
// "clientMessage"イベントを動かす
socket.emit("clientMessage", "hello from client");
// "serverMessage"イベントを作成、登録する
socket.on("serverMessage", (msg) => {
    console.log('server -> client: ' + msg);
});
