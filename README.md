# [Image Slider](https://www.npmjs.com/package/image-slider-module)
[The Odin Project](https://www.theodinproject.com/) - [Exercise Image Slider](https://www.theodinproject.com/courses/javascript/lessons/dynamic-user-interface-interactions#image-slider)

Create image sliders wherever you want inside you webpage. The slider changes
every 5 seconds by default.

## Getting Started
You can download it from [npm](https://www.npmjs.com/package/image-slider-module)
``` sh
npm i image-slider-module
```

First you need to create an array of your images url's
``` javascript
let arr = [];
arr.push(imageUrl0);
arr.push(imageUrl1);
arr.push(imageUrl2);
```

Then you create a new Imageslider object
``` javascript
/* Imageslider(widthSize, heightSize, urlsArray, changeInterval) */
let myImageslider = new Imageslider(100, 25, arr, 5000);
```

And add the Imageslider object to your webpage with the render method
``` javascript
/* Body can be any HTML container */
body.appendChild(myImageslider.render());
```

## What have I learned?
* Create a JavaScript Library.
* Publish to [npm](https://www.npmjs.com/).

## Acknowledgement
This project was made posible thanks to [The Odin Project](https://www.theodinproject.com/).

## License
[MIT](https://mit-license.org/).
