export default class Button{
	constructor(onspeen){
		this.onSpeen = onspeen;
		this.position = {
			x:870,
			y:270
		};
	
		this.active = true;
		
		this.activeTexture = PIXI.loader.resources["BTN_Spin"].texture;
		this.inactiveTexture = PIXI.loader.resources["BTN_Spin_d"].texture;
		
		this.container = new PIXI.Container();
		this.container.position.x = this.position.x;
		this.container.position.y = this.position.y;
		
		this.button = new PIXI.Sprite(this.activeTexture);
		this.button.buttonMode = true;
		this.button.interactive = true;
		this.button.anchor.set(0.5);
		
		this.container.addChild(this.button);
		this.bindEvents();
		
	}
	bindEvents(){
		this.button
			.on('mouseover', this.onHover.bind(this))
			.on('mouseout', this.onOut.bind(this))
			.on('click', this.onClick.bind(this));
	}
	
	onHover()
	{
		if(!this.active) return;
		this.button.texture =  this.inactiveTexture;
	}
	onOut()
	{
		if(!this.active) return;
		this.button.texture = this.activeTexture;
	}
	onClick(){
		if(!this.active)return;
		this.deactivate();
		this.onSpeen();
		
	}
	deactivate(){
		this.active = false;
		this.button.texture = this.inactiveTexture;
	}
	activate(){
		this.active = true;
		this.button.texture = this.activeTexture;
	}
	
	
}