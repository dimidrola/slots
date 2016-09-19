export default class DrumItem{
	constructor(turn){
		this.width = 235;
		this.height = 156;
		this.stesh ={};
		this.animation = true;
		this.position = {x:0,y:0};
		this.delayStop = 0;
		this.selected = null;
		this.blocks=[
			{id:0, texture:PIXI.loader.resources["SYM1"].texture},
			{id:1, texture:PIXI.loader.resources["SYM2"].texture},
			{id:2, texture:PIXI.loader.resources["SYM3"].texture},
			{id:3, texture:PIXI.loader.resources["SYM4"].texture},
			{id:4, texture:PIXI.loader.resources["SYM5"].texture},
			{id:5, texture:PIXI.loader.resources["SYM6"].texture}
			
		];
		
		this.container = new PIXI.Container();
		this.container.position.x = this.position.x;
		this.container.position.y = this.position.y;
		
		this.createTurn(turn)
		this.createBlocks();
		
	}
	
	createTurn(turn){
		let turned = [];
		for(let i=0; i<turn.length; i++) {
			this.blocks.forEach((item)=> {
				if(item.id == turn[i]) turned.push(item)
			})
		}
		this.blocks = turned;
	}
	
	createBlocks(){
		for(let i=0; i<this.blocks.length; i++){
			let item = new PIXI.Sprite(this.blocks[i].texture);
			item.position.y = i * this.height;
			this.stesh['b_'+this.blocks[i].id] = item;
			this.container.addChild(item);
		}
	}
	rotate(selected = 0, fn){
		this.animation = true;
		this.selected = selected;
		this.stop()
		this.animate(selected,fn);
		
	}
	get result(){
		let active = {};
		this.blocks.forEach((item, i)=>{
			if(item.id == this.selected){
				active.curr = item.id;
				active.next = this.blocks[(i+1==6 ? 0 : i+1)].id;
				active.prev = this.blocks[(i-1<0 ? 5 : i-1)].id;
			}
		})
		return active;
	}
	animate(selected, fn) {
		let _selected = this.stesh['b_'+selected].position.y,
			funk = fn;
		
		if(!this.animation &&
			_selected%this.height==0 &&
			_selected==this.height) {
			funk();
			return false;
		}
		
		
		for(let i=0; i<this.blocks.length; i++){
			let current = this.stesh['b_'+i]
			current.position.y -= 39;
			if(current.position.y <= -this.height) current.position.y = (this.blocks.length-1)*this.height;
		}

		requestAnimationFrame(this.animate.bind(this, selected, funk));
	}
	stop(){
		let delay = 3000+this.delayStop;
		setTimeout(()=>{
			this.animation = false;
		}, delay );
	}
	
	
}