const replace = require("replace-in-file");
const options = [{
  //you may need to modify the file address to suite your project
  files: "./out/index.html",
  from: [/src="\//g, /href="\//g],
  to: ['src="./', 'href="./'],
}, {
  //you may need to modify the file address to suite your project
  files: "./out/generate-qr.html",
  from: [/src="\//g, /href="\//g],
  to: ['src="./', 'href="./'],
}, {
  //you may need to modify the file address to suite your project
  files: "./out/shortener.html",
  from: [/src="\//g, /href="\//g],
  to: ['src="./', 'href="./'],
}];

options.forEach(option => {
  (async function () {
    try {
      const results = await replace(option);
      console.log("Replacement results:", results);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  })();
});