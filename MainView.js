var Observable = require('FuseJS/Observable');

var boxesJson = [{
    "id": 1,
    "text": "Hello 1",
    "startColor": "#000",
    "endColor": "#EE5458"
  },
  {
    "id": 2,
    "text": "Hello 2",
    "startColor": "#000",
    "endColor": "#8591a5"
  },
  {
    "id": 3,
    "text": "Hello 3",
    "startColor": "#000",
    "endColor": "#4aaf5d"
  },
  {
    "id": 4,
    "text": "Hello 4",
    "startColor": "#000",
    "endColor": "#EEaa58"
  }
];

var boxes = Observable();
boxes.replaceAll(boxesJson);

module.exports = {
  boxes: boxes
};
