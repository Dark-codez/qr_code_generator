const form = document.forms[0];
var QRCode = require('qrcode');
var canvas = document.querySelector('canvas')
const button = document.querySelector(".download_btn");
function random(min,max){
	return Math.floor(Math.random() * (max - min) + min);
}
form.addEventListener('submit',(e) => {
	e.preventDefault();
	const data = form.qr_code_text.value;
	if(form.qr_code_text.value == ""){
		alert("Your text can't be empty");
		return;
	}
	button.style.display = "block";
	QRCode.toCanvas(canvas, data, function (error) {
	  if (error) console.error(error)
	  console.log('success!');
	})
	button.addEventListener("click",() => {
		const link = document.createElement('a');
		link.download = `${random(100,10000)}.png`;
		link.href = document.getElementById('canvas').toDataURL()
		link.click();
	});
});
