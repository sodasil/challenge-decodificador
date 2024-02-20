var botaoEncrypt = document.getElementById('botaoEncrypt');
var botaoDecrypt = document.getElementById('botaoDecrypt');
var textArea = document.getElementById('textArea');
var resultadoTexto = document.getElementById('copyArea');
var copiarResultado = document.querySelector('.pagina__copiar-resultado');
var resultadoCodigo = document.querySelector('.pagina__inicial__codigo');
var botaoCopy = document.getElementById('botaoCopy');
var copyArea = document.getElementById('copyArea');

botaoEncrypt.addEventListener('click', function () {
    if (!this.disabled) {

        var encryptText = textArea.value;

        var textoAlterado = encryptText.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        resultadoTexto.textContent = textoAlterado;
        resultadoTexto.classList.add('ativo');

        copiarResultado.style.display = 'block';
        resultadoCodigo.style.display = 'none';
    }
});

botaoDecrypt.addEventListener('click', function () {
    if (!this.disabled) {

        var decryptText = textArea.value;

        var textoAlterado = decryptText.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        resultadoTexto.textContent = textoAlterado;
        resultadoTexto.classList.add('ativo');

        copiarResultado.style.display = 'block';
        resultadoCodigo.style.display = 'none';
    }
});

botaoCopy.addEventListener('click', function () {
    if (copyArea.value.length > 0) {
        copyArea.select();
        copyArea.setSelectionRange(0, 99999);
        document.execCommand('copy');
    }
});
