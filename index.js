import QRCode from 'qrcode';
import qr from 'qr-image';
import fs from  "fs";

const code = "www.google.com";

// With promises
QRCode.toDataURL(code, { errorCorrectionLevel: 'H' })
  .then(url => {
    console.log(url)
    
        //qr-image
  var qr_svg = qr.image(code, { type: 'png' });
  qr_svg.pipe (fs.createWriteStream(code + '.png'));
  })
  
  .catch(err => {
    console.error(err)
  })


  generateQR(code);
  
