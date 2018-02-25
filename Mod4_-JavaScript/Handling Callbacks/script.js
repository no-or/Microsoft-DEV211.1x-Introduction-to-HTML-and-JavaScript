function onClickHandler(callback){
    alert("Button has been pressed! ");
    if(callback) callback();
}

function doMore() {
    alert("I could process more logic here");
}

function doSomethingElse() {
    document.writeln('Test Message');
}