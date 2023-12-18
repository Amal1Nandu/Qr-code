import QRCode from 'qrcode';
import qr from 'qr-image';
import fs from  "fs";

const code = "www.google.com";

// With promises
QRCode.toDataURL(code, { errorCorrectionLevel: 'H' })
  .then(url => {
    console.log(url)
  })
  .catch(err => {
    console.error(err)
  })

// With async/await
const generateQR = async code => {
  try {
    console.log(await QRCode.toDataURL(code));
    console.log("success!")

     //qr-image
  var qr_svg = qr.image(code, { type: 'png' });

  qr_svg.pipe (fs.createWriteStream(code + '.png'));
 

  } catch (error) {
    console.error(error);
  }
  };

  generateQR(code);
  
