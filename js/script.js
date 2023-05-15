var socket = new WebSocket("wss://tl.upwork.com/wp?app=thunder&libVersion=2.71.0&tml=true&appVersion=unknown&base64=false&oauth2_token=oauth2v2_eca68b6c4a4bcb12af9afae7352c63c6&orgId=1650626564378816513&X-Atmosphere-tracking-id=0&X-Atmosphere-Framework=3.1.3-javascript&X-Atmosphere-Transport=websocket&X-Atmosphere-TrackMessageSize=true&X-atmo-protocol=true");

socket.onopen = function(_socket, event) {
    console.log("Socket opened : ", _socket);
    console.log("Socket open event : ", event);
}
socket.onclose = function(_socket, event) {
    console.log("Socket closed : ", _socket);
    console.log("Socket closed event : ", event);
}
socket.onerror = function(_socket, event) {
    console.log("Error occure on socket : ", _socket);
    console.log("Socket error event : ", event);
}
socket.onmessage = function(_socket, event) {
    console.log("Socket got new message : ", _socket);
    console.log("Socket message event : ", event);
}

//socket.send();