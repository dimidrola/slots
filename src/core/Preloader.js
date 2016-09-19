export default class Preloader{
	constructor(fn){
		this.loader = PIXI.loader;
		this.addImages();
		this.loader.once('complete',fn);
		this.loader.load();
	}
	addImages(){}
}