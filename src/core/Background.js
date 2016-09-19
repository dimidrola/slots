export default class Background{
	constructor(){
		this.background = null;
		this.container = new PIXI.Container();
	}
	
	createBackground(){
		var bg = new PIXI.Sprite(
			this.background
		);
		this.container.addChild(bg);
	}
}