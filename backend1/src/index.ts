import { WebSocketServer } from 'ws';
import { GameManager } from './GamerManager';

const wss = new WebSocketServer({ port : 8080 });

const gameManager = new GameManager();

wss.on('connection', function connection(ws) {

    gameManager.addUser(ws)
    
    ws.on("disconnnect", () => gameManager.removeUser(ws))


   
})