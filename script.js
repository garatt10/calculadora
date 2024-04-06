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
    
    // Redirigir a un enlace después de calcular
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
}
