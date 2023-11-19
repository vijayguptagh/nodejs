// use the inquirer npm to get user input
// use the qr-image npm package to turn the user entered url into a QR code image.
// create a txt file to save user input using the native fs code module. 
 
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
//The inquirer package uses ES modules in its source code and exports using the export syntax. so u can't use require keyword


inquirer
  .prompt([
    { /* messgae-prints on console-to take input */
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;  /* note .URL is variable and not function of answers  */
    /* create qr code of link provided by using function image() of package qr. */
    var qr_svg = qr.image(url);
    /* now save created qr code */
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


