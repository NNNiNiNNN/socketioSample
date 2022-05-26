
import {io} from 'socket.io-client';

const socket = io('http://localhost:' + 5000);

// 接続時にこのイベントが発火する
socket.on('connect', () => console.log('connect'));


// "clientMessage"イベントを動かす
socket.emit("clientMessage", "hello from client");

// "serverMessage"イベントを作成、登録する
socket.on("serverMessage", (msg: any)=>{
    console.log('server -> client: ' + msg);
})