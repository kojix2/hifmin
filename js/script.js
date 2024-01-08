document.getElementById('inputText').addEventListener('input', function() {
    var inputText = this.value;
    document.getElementById('outputText').value = inputText;
});

