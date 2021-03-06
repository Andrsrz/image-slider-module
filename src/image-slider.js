class Imageslider {
	constructor(x, y, images, interval){
		this.x = x ? x : "100";
		this.y = y ? y : "25";
		this.images = images ? images : [];
		this.interval = interval ? interval : 5000;
		this._index = 0;
		this._sliderContainer = document.createElement("div");
		this._imageContainer = document.createElement("div");
		this._realImageContainer = document.createElement("div");
		this._image = document.createElement("img");
		this._previous = document.createElement("button");
		this._next = document.createElement("button");
		this._circles = document.createElement("ul");
	}

	_setButtonsEvents(){
		this._next.addEventListener("click", () => {
			if(this._index < this.images.length - 1)
				this._index++;
			else
				this._index = 0;

			console.log(this._index);
			this._image.src = this.images[this._index];
		}, false);

		this._previous.addEventListener("click", () => {
			if(this._index > 0)
				this._index--;
			else
				this._index = this.images.length - 1;

			console.log(this._index);
			this._image.src = this.images[this._index];
		}, false);
	}

	_setNavEvents(element, index){
		element.addEventListener("click", () => {
			this._index = index;
			console.log(this._index);
			this._image.src = this.images[this._index];
		}, false);
	}

	_setStyle(){
		this._sliderContainer.style.display = "flex";
		this._sliderContainer.style.flexFlow = "column nowrap";
		this._sliderContainer.style.justifyContent = "center";
		this._sliderContainer.style.alignItems = "center";
		this._sliderContainer.style.width = this.x + "%";
		this._sliderContainer.style.height = "max-content";
		this._imageContainer.style.display = "flex";
		this._imageContainer.style.flexFlow = "row nowrap";
		this._imageContainer.style.justifyContent = "center";
		this._imageContainer.style.alignItems = "center";
		this._imageContainer.style.width = this.x + "%";
		this._imageContainer.style.height = "max-content";
		this._previous.style.backgroundColor = "transparent";
		this._previous.style.border = "none";
		this._previous.innerHTML = "<";
		this._realImageContainer.style.width = this.x + "%";
		this._realImageContainer.style.height = this.y + "%";
		this._image.style.width = "100%";
		this._image.style.height = "100%";
		this._image.style.objectFit = "contain";
		this._next.style.backgroundColor = "transparent";
		this._next.style.border = "none";
		this._next.innerHTML = ">";
		this._circles.style.listStyle = "none";
	}

	render(){
		this._setStyle();
		this._setButtonsEvents();
		this._imageContainer.appendChild(this._previous);
		this._image.src = this.images[this._index];
		this._realImageContainer.appendChild(this._image);
		this._imageContainer.appendChild(this._realImageContainer);
		this._imageContainer.appendChild(this._next);
		this._sliderContainer.appendChild(this._imageContainer);
		for(let i = 0; i < this.images.length; i++){
			let listItem = document.createElement("li");
			let circle = document.createElement("div");
			listItem.style.display = "inline-block";
			listItem.style.margin = "0 5px 0 5px";
			circle.style.borderRadius = "50%";
			circle.style.width = "10px";
			circle.style.height = "10px";
			circle.style.backgroundColor = "#333";
			circle.style.cursor = "pointer";
			/* I need to set the click event here
			 * because setting them outside the elements
			 * doesn't exists. */
			this._setNavEvents(circle, i);
			listItem.appendChild(circle);
			this._circles.appendChild(listItem);
		}
		this._sliderContainer.appendChild(this._circles);

		setInterval(() => {
			this._next.click();
		}, this.interval);

		return this._sliderContainer;
	}
};

export { Imageslider };
