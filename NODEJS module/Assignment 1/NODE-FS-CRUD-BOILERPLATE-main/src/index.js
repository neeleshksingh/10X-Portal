const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  fs.writeFile(fileName, fileContent);
};
myFileWriter("neelesh.txt", "Hello there")
const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.readFile(fileName)
    .then(function (result) {
      console.log("" + result);
    })
    .catch(function (error) {
      console.log(error);
    })

};
myFileReader("neelesh.txt")
const myFileUpdater = async (fileName, fileContent) => {
  fs.appendFile(fileName, fileContent);
};
myFileUpdater("neelesh.txt", " world")
const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.unlink(fileName);
};
myFileDeleter("neelesh.txt")
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };