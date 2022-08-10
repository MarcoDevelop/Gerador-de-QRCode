function GerarQRCode() {
    if(document.querySelector('textarea').value ==="") {
        alert("Campo em branco.")        
    } else{
        var inputUser = document.querySelector('textarea').value;
        var GoogleChatAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=';
        var conteudoQRCode = GoogleChatAPI + encodeURIComponent(inputUser);
        document.querySelector('#QRCodeImage').src = conteudoQRCode;
        
    }
}