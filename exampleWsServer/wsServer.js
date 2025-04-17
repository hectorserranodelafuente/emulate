const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });
const {exec}  = require( 'child_process' )
const path  = require('path')

var socket

const Accumulator = require('../node_modules/emulate/main/accumulator.js')


/*

#########################################################################################
                            HERE WE REQUIRE TEST CASES
#########################################################################################


const signUpCase1 = require('./cases/signUp/signUp.case1.test.js')
const signUpCase2 = require('./cases/signUp/signUp.case2.test.js')

##########################################################################################

*/


function dist(){    
    console.log('DIST')     
}

/*
let inst1, 
    inst2
*/

let time = 3000

server.on('connection', (_socket) => {
    
    console.log('Cliente conectado',_socket);
    
    socket = _socket
    
    /*

    ##################################################
        HERE WE INITIALIZE TEST CASES
    ##################################################

    inst1 = new signUpCase1( 0, false, null)
    inst2 = new signUpCase2( 1, true, dist, socket )
    
    #################################################
    
    */
    
    let instances = [ 
        /*
            inst1, 
            inst2
        */
    ]

        instances.forEach((inst,index) => {

            setTimeout(function(){
                inst.main(process.argv,socket)
            },time)
            
            time += 3000
        })
    
    
    socket.on('message', (message) => {
        console.log('Mensaje recibido: ', message);
        // Enviar respuesta al cliente
        socket.send('Mensaje recibido');
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });
});

let filePath=path.join(__dirname,'..','/node_modules/emulate/main/wsClient.html')
const command = `start chrome "${filePath}"`
exec(command,(err)=>{ console.log(err) });

console.log('Servidor WebSocket escuchando en el puerto 8080')