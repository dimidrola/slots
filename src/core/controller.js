import Loader from './Loader'
import Drums from './Drums'
import Button from './Button'
import Rating from './Rating'

export default class Controller{
	constructor(){
		this.width = 960;
		this.height = 535;
		this.stopCount = 0;
		this.result = [];
		
		this.renderer = PIXI.autoDetectRenderer(this.width, this.height);
		this.stage = new PIXI.Container();
		
		new Loader(this.init.bind(this));
	}
	
	init(){
		document.body.appendChild(this.renderer.view);
		this.renderer.render(this.stage)
		
		this.createBackground();
		this.createDruns();
		this.createButton();
		this.createRating();
		this.animate()
	}
	createRating(){
		this.rating = new Rating();
		this.stageAdd(this.rating.container);
	}
	stageAdd(item){
		this.stage.addChild(item);
		this.renderer.render(this.stage);
	}
	
	createBackground(){
		var bg = new PIXI.Sprite(
			PIXI.loader.resources["BG"].texture
		);
		this.stageAdd(bg);
	}
	
	createDruns(){
		this.drums = new Drums(this.stageAdd.bind(this));
		this.stageAdd(this.drums.container);
	}
	
	createButton(){
		this.button = new Button(this.onSpeen.bind(this));
		this.stageAdd(this.button.container);
	}
	
	onSpeen(){
		this.stopCount =0;
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