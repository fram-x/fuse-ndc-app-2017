var Observable = require('FuseJS/Observable');

var boxesJson = [{
    "id": 1,
    "text": "Hello",
    "startColor": "#000",
    "endColor": "#EE5458"
  },
  {
    "id": 2,
    "text": "Fuse",
    "startColor": "#000",
    "endColor": "#8591a5"
  },
  {
    "id": 3,
    "text": "at",
    "startColor": "#000",
    "endColor": "#4aaf5d"
  },
  {
    "id": 4,
    "text": "NDC",
    "startColor": "#000",
    "endColor": "#EEaa58"
  }
];

var sliderValue = Observable(0);
var boxes = Observable();
boxes.replaceAll(boxesJson);

module.exports = {
  boxes: boxes,
  sliderValue: sliderValue
};
