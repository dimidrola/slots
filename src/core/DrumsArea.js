export default class DrumsArea{
	constructor(){
		this.addToStage = null;
		this.x = null;
		this.y = null;
		this.width=null;
		this.height = null;
		this.drumPositions = null;
		this.columnPadding = null;
		this.globalResult = null;
		this.delayStop = null;
		
		this.drums=[];
		
		this.container = new PIXI.Container();
		
	}
	
	addDrums(){
		for(let i=0; i<this.drums.length; i++){
			let drumItem = this.drums[i];
			drumItem.delayStop = this.delayStop*i;
			drumItem.container.position.x = (drumItem.width + this.columnPadding) * i;
			this.container.addChild(drumItem.container);
		}
	}
	
	rotate(fn){
		this.globalResult = [];
		for(let i=0; i<this.drums.length; i++){
			let drumItem = this.drums[i];
			let random = Math.floor(Math.random() * this.drumPositions)
			drumItem.rotate(random, fn);
			this.globalResult.push(drumItem.result)
			
		}
	}
	
	
	
	createMask(){
		let thing = new PIXI.Graphics();
		
		thing.clear();
		thing.drawRect(this.x, this.y, this.width, this.height);
		
		this.container.mask = thing;
		this.addToStage(thing);
	}
	
}