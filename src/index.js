import { Imageslider } from './image-slider.js';

const Index = (() => {
	const body = document.body;

	const render = () => {
		let images = [];
		images.push("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.X3BxyzOnpnMj3XDWAG2m_QHaEK%26pid%3DApi&f=1");
		images.push("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oZprK704m-2D-Fuw5BP5ugHaEK%26pid%3DApi&f=1");
		images.push("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dXQTRcslLm5ia0Za6aIjhgHaD5%26pid%3DApi&f=1");
		images.push("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KWA8-sYTNMZYgu00HdW8MwHaDt%26pid%3DApi&f=1");
		let myImageslider = new Imageslider(100, 25, images);
		body.appendChild(myImageslider.render());
	}

	return { render };
})();

Index.render();
