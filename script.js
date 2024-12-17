document.getElementById("generate-btn").addEventListener("click", function() {
    // Obtém o texto do input
    var qrText = document.getElementById("qr-text").value;

    // Verifica se o campo de texto não está vazio
    if (qrText.trim() !== "") {
        // Cria o QR Code
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: qrText,
            width: 200,  // Tamanho do QR Code
            height: 200,
            colorDark: "#000000",  // Cor do QR Code
            colorLight: "#ffffff", // Cor de fundo
            correctLevel: QRCode.CorrectLevel.H
        });

        // Torna o QR Code visível
        document.getElementById("qrcode").style.display = "block";

        // Torna o botão de download visível
        document.getElementById("download-btn").style.display = "block";

        // Torna o botão de gerar invisível
        document.getElementById("generate-btn").style.display = "none";

        // Prepara o QR Code para o download
        var qrImage = document.querySelector("#qrcode img");
        
        qrImage.onload = function() {
            // Quando a imagem estiver carregada, configuramos o link de download
            var dataUrl = qrImage.src; // Obtém a imagem gerada em base64
            var downloadLink = document.getElementById("download-btn").querySelector("a");
            downloadLink.href = dataUrl;
            downloadLink.download = "qrcode.png"; // Nome do arquivo
        };
    } else {
        alert("Por favor, insira um texto para gerar o QR Code.");
    }
});
