Node JS - Oxford Emotion
=========

Small library that incorporates Microsoft's project Oxford Emotion Recognition

## Installation

  npm install node-oxford-emotion --save

## Usage

  var oxford-emotion = require("node-oxford-emotion")(api-key)
  var emotion = oxford-emotion.recognize("url", image-url);

## TODOS
  For now, local images are not supported. Will implement when Microsoft opens the endpoint.

## Project Oxford Documentation

  [Project Oxford](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/563b31ea778daf121cc3a5fa)

## Release History

 * 1.0.0 Initial Release