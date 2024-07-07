import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        { type: 'input', name: 'url', message: 'Please enter a URL:' }
    ]).then((answers) => {
        console.log("You typed: ", answers.url);
        console.log("Generating QR code...")
        var qr_png = qr.image(answers.url, { type: 'png' });
        qr_png.pipe(fs.createWriteStream('QR.png'));
        fs.writeFileSync('qr.txt', answers.url);
    })
    .catch((error => {
        if (error.isTtyError) {
            console.log("Error: ", error)
        }
        else {
            console.log("Error: ", error)
        }
    }));
