"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(server, {
    // cors設定はこれ
    cors: {
        origin: "*"
    }
});
const port = 5000;
server.listen(port, () => console.log('app listening on port ' + port));
io.on('connection', (socket) => {
    // "clientMessage"イベントを作成、登録する
    socket.on("clientMessage", (message) => {
        console.log('client -> server: ' + message);
    });
    // "serverMessage"イベントを動かす
    socket.emit("serverMessage", "hello from server");
    // これだと全クライアントに行く
    io.emit("serverMessage", "hello from server to everyone");
    let id = socket.id;
    // これだと指定したidの人間のみに行く
    io.to(id).emit("serverMessage", "hello from server to only you");
});
