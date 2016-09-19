
export default class Manager{
	constructor(){
		this.width = null;
		this.height = null;
		this.stopCount = 0;
		this.result = [];
		this.stage = new PIXI.Container();
		this.startPreload();
	}
	startPreload(){
	}
	createRenderer(){
		this.renderer = PIXI.autoDetectRenderer(this.width, this.height);
		
		document.body.appendChild(this.renderer.view);
		
		this.renderer.render(this.stage);
	}
	stageAdd(item){
		this.stage.addChild(item);
		this.renderer.render(this.stage);
	}
	onSpeen(){
		this.stopCount = 0;
		this.rating.decrease();
		this.drums.rotate(this.onEndAnimation.bind(this));
	}
	onEndAnimation(){
		this.stopCount++;
		if(this.stopCount==3){
			this.button.activate();
			this.rating.checkForWin(this.drums.globalResult);
			this.emptyCouns();
		}
		
	}
	emptyCouns(){
		if(this.rating.coins<=0){
			this.button.deactivate();
			this.rating.refillAcount();
		}
	}
	animate() {
		requestAnimationFrame(this.animate.bind(this));
		this.renderer.render(this.stage);
	}
}