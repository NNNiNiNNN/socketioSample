import http from 'http';

const server: http.Server = http.createServer();

import { Server, Socket }  from 'socket.io';
const io = new Server(server, {
    // cors設定はこれ
    cors:{
        origin: "*"
    }
});

const port = 3000;

server.listen(port, () => console.log('app listening on port ' + port));




io.on('connection', (socket: Socket)=>{

    // "clientMessage"イベントを作成、登録する
    socket.on("clientMessage", (message)=>{
        console.log('client -> server: ' + message);
    })
    
    // "serverMessage"イベントを動かす
    socket.emit("serverMessage", "hello from server");

    // これだと全クライアントに行く
    io.emit("serverMessage", "hello from server to everyone");
    let id = socket.id;

    // これだと指定したidの人間のみに行く
    io.to(id).emit("serverMessage", "hello from server to only you");


})