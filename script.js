function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
    
    // Reemplazar la página con una imagen de Google
    document.body.innerHTML = '<img src="https://i.ytimg.com/vi/Zcb8yPEItwA/mqdefault.jpg">';
}
