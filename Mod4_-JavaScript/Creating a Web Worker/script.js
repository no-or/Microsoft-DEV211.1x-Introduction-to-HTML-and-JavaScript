var worker;

function start(){
    worker = new Worker("worker.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += "<li>" + event.data + "</li>";
    };
}

function stop() {
    worker.terminate();
}