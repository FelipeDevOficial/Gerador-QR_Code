document.getElementById("generate-btn").addEventListener("click", function () {
    // Obtém o texto do input
    var qrText = document.getElementById("qr-text").value;

    // Verifica se o campo de texto não está vazio
    if (qrText.trim() !== "") {
        // Limpa qualquer QR Code anterior
        document.getElementById("qrcode").innerHTML = "";

        // Cria o QR Code
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: qrText,
            width: 200, // Tamanho do QR Code
            height: 200,
            colorDark: "#000000", // Cor do QR Code
            colorLight: "#ffffff", // Cor de fundo
            correctLevel: QRCode.CorrectLevel.H,
        });

        // Torna o QR Code visível
        document.getElementById("qrcode").style.display = "block";

        // Torna o botão de download visível
        document.getElementById("download-btn").style.display = "block";

        // Torna o botão de gerar invisível
        document.getElementById("generate-btn").style.display = "none";

        // Aguardar a geração do QR Code
        setTimeout(() => {
            var qrCanvas = document.querySelector("#qrcode canvas");

            if (qrCanvas) {
                var dataUrl = qrCanvas.toDataURL("image/png");
                var downloadLink = document.getElementById("download-link");
                downloadLink.href = dataUrl;
                downloadLink.download = "qrcode.png";
            } else {
                alert("Erro ao gerar QR Code. Tente novamente.");
            }
        }, 500);
    } else {
        alert("Por favor, insira um texto para gerar o QR Code.");
    }
});