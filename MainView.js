var Observable = require('FuseJS/Observable');

var boxesJson = [{
    "id": 1,
    "text": "Hello 1"
  },
  {
    "id": 2,
    "text": "Hello 2"
  },
  {
    "id": 3,
    "text": "Hello 3"
  },
  {
    "id": 4,
    "text": "Hello 4"
  }
];

var boxes = Observable();
boxes.replaceAll(boxesJson);

module.exports = {
  boxes: boxes
};
