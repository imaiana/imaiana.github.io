// Create your global variables below:
var piclib = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg','13.jpg','14.jpg','15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg']
var imageDir = '/Users/imaianabayan/Downloads/Photos (1)/';

function start() {
  let rotator = document.getElementById('a');
  let delayInSeconds = 1;
  let dir = "/Users/imaianabayan/Downloads/Photos (1)/";
  document.getElementById('a').src = "/Users/imaianabayan/Downloads/Photos (1)/5.jpg";
  let num = 0;
  let changeImage = function() {
    let len = piclib.length;
    rotator.src = dir + piclib[num++];
    if (num == len) {
      num = 0;
    }
  };
 setInterval(changeImage, delayInSeconds * 1000);
};
