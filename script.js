const generateBtn = document.getElementById('generate-btn');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const text = document.getElementById('text').value;
    if (text) {
        // Clear previous QR code if exists
        qrcodeContainer.innerHTML = '';
        new QRCode(qrcodeContainer, text);
    } else {
        alert("Please enter some text or a URL to generate the QR code.");
    }
});
