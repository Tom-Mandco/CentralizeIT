var log = console.log.bind(console);
var chokidar = require('chokidar');
var dateFormat = require('dateformat');
var ws = require("nodejs-websocket")
var watchPathInput = ('.\\Central Location');
var watchPathOutput = ('.\\Test\\OutputWatch\\');

var inputWatcher = chokidar.watch(watchPathInput).on('all', (event, path) => {
  handleCase(path, timeNow(), event, "Input Watch");
});

var outputWatcher = chokidar.watch(watchPathOutput).on('all', (event, path) => {
  handleCase(path, timeNow(), event, "Output Watch");
});
  
function happyPath(path)
{     
    return path.replace(/\\/g, "\\\\");
} 

function timeNow() {
	var now = new Date();
	return dateFormat(now,"HH:MM:ss.l (dd-mm-yyyy)");
}

function errorHandler(error, timeStamp)
{
	var message = [];
	message.push('{ ');
	
	message.push(`\"Error\":`);
	message.push(`\"` + error + `\"`);
	message.push(`,`);
	
	message.push(`\"TimeStamp\":`);
	message.push(`\"` + timeStamp + `\"`);
		
	message.push(' }');
	
	console.log(message.join(""));
		
	broadcast(server, message.join(""));
}

function handleCase(fileName, timeStamp, eventType, watchName)
{
	var message = [];
	message.push('{ ');
	
	message.push(`\"FileName\":`);
	message.push(`\"` + happyPath(fileName) + `\"`);
	message.push(`,`);
	
	message.push(`\"TimeStamp\":`);
	message.push(`\"` + timeStamp + `\"`);
	message.push(`,`);
	
	message.push(`\"EventType\":`);
	message.push(`\"` + eventType + `\"`);
	message.push(`,`);
	
	message.push(`\"WatchName\":`);
	message.push(`\"` + watchName + `\"`);
		
	message.push(' }');
	
	log(message.join(""));
		
	broadcast(server, message.join(""));
}

function broadcast(server, msg) {
    server.connections.forEach(function (conn) {
        conn.sendText(msg)
    })
}

var server = ws.createServer(function (conn) {
    log("New connection")
    conn.on("text", function (str) {
        log("Received "+str)
        
		if(str.startsWith("start"))
		{
			log("cmd executed.")
		}
		else
		{
			log("Unrecognised sequence.")
		}
    })
    conn.on("close", function (code, reason) {
        log("Connection closed")
    })
}).listen(8081)


inputWatcher
  .on('add', filename => handleCase(filename, timeNow(), 'add'))
  .on('change', (filename, details) => handleCase(filename, timeNow(), 'mod'))
  .on('unlink',  filename => handleCase(filename, timeNow(), 'del'));