import Background from '../core/Background'
export default class Fond extends Background{
	constructor(){
		super();
		this.background = PIXI.loader.resources["BG"].texture;
		this.createBackground();
	}

}