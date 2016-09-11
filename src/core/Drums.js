import DrumsItem from './DrumItem'

export default class Drums{
	constructor(addToStage){
		this.addToStage = addToStage;
		this.x = 70;
		this.y = 10;
		this.columnPadding = 8;
		this.globalResult = null;
		
		this.drums=[new DrumsItem([1,2,5,3,0,4]), new DrumsItem([5,3,2,0,1,4]), new DrumsItem([2,4,3,5,1,0])];
		
		this.container = new PIXI.Container();
		this.container.x = this.x;
		this.container.y = this.y;
		
		this.addDrums();
		this.createMask();
		
	}
	
	addDrums(){
		for(let i=0; i<this.drums.length; i++){
			let drumItem = this.drums[i];
			drumItem.delayStop = 500*i;
			drumItem.container.position.x = (drumItem.width + this.columnPadding) * i;
			this.container.addChild(drumItem.container);
		}
	}
	
	rotate(fn){
		this.globalResult = [];
		for(let i=0; i<this.drums.length; i++){
			let drumItem = this.drums[i];
			let random = Math.floor(Math.random() * 5)
			drumItem.rotate(random, fn);
			this.globalResult.push(drumItem.result)
			
		}
	}
	
	
	
	createMask(){
		let thing = new PIXI.Graphics();
		
		thing.clear();
		thing.drawRect(this.x, this.y, 721, 467);
		
		this.container.mask = thing;
		this.addToStage(thing);
	}
	
}