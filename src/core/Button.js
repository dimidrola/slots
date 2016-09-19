export default class Button{
	constructor(){
		this.onSpeen = null;
		this.button = null;
		this.position = {
			x:null,
			y:null
		};
		this.container = new PIXI.Container();
		this.active = true;
	}
	
	createButton(){
		let _bt = new PIXI.Sprite(this.activeTexture);
		_bt.buttonMode = true;
		_bt.interactive = true;
		_bt.anchor.set(0.5);
		return _bt;
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