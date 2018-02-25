function onClickHandler(){
    alert("Button Clicked!");
}

function startLogic() {
    var newHtml = '<em>New Header</em>';
    document.getElementById('headerItem').innerHTML = newHtml;
}
startLogic();