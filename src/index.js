import { Imageslider } from './image-slider.js';

const Index = (() => {
	const body = document.body;

	const render = () => {
		let images = [];
		images.push("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*VOVGtVFRVHp6wqrYlcPFAw.png&f=1&nofb=1");
		let myImageslider = new Imageslider(null, null, images);
		body.appendChild(myImageslider.render());
	}

	return { render };
})();

Index.render();
