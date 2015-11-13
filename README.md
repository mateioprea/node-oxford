Node JS - Oxford Emotion
=========

Small library that incorporates Microsoft's project Oxford Emotion Recognition

## Installation

  npm install node-oxford-emotion --save

## Usage

   URL:

```javascript
  var oxfordEemotion = require("node-oxford-emotion")(api-key)
  var emotion = oxfordEmotion.recognize("url", image-url, function(cb) {
    console.log(cb);
  });
```
  Local Image:
  ```javascript
    var oxfordEemotion = require("node-oxford-emotion")(api-key)
    var emotion = oxfordEmotion.recognize("image", imageData, function(cb) {
      console.log(cb);
    });
  ```

  You need to read the file as binary data. You can use this function:
  ```javascript
  function binaryRead(file) {
      var bitmap = fs.readFileSync(file);
      return new Buffer(bitmap.toString('binary'),'binary');
  }
  ```
  You also need to parse the response using JSON.parse() if you input binary file.

## TODOS
   Nothing.

## Project Oxford Documentation

  [Project Oxford](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/563b31ea778daf121cc3a5fa)

## Release History

 * 1.0.0 Initial Release
 * 1.0.1 Add callback
 * 1.0.2 Add support for local images
 * 1.0.4 Fix typo in README