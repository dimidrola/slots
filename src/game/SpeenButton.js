import Button from '../core/Button'

export default class SpeenButton extends  Button{
	constructor(onspeen){
		super();
		this.onSpeen = onspeen;
		this.position = {
			x:870,
			y:270
		};
	
		this.active = true;
		
		this.init();
		this.bindEvents();
		
	}
	init(){
		this.activeTexture = PIXI.loader.resources["BTN_Spin"].texture;
		this.inactiveTexture = PIXI.loader.resources["BTN_Spin_d"].texture;
		
		
		this.container.position.x = this.position.x;
		this.container.position.y = this.position.y;
		
		this.button = this.createButton();
		
		this.container.addChild(this.button);
	}
	
}