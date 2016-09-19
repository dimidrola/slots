export default class Rating{
	constructor(props){
		this.coins = 20;
		this.container =  new PIXI.Container();
		this.position = {x:100,y:480};
		this.stash =[];
		this.val = 'WIN: ';
		this.createText()
	}
	
	createText(){
		var style = {
			fontFamily : 'Arial',
			fontWeight : 'bold',
			fontSize : '36px',
			fill : '#F7EDCA',
			stroke : '#4a1850',
			strokeThickness : 5,
			dropShadow : true,
			dropShadowColor : '#000000',
			dropShadowAngle : Math.PI / 6,
			dropShadowDistance : 6,
			wordWrap : true,
			wordWrapWidth : 440
		};
		this.text = new PIXI.Text(this.val + this.coins, style);
		this.text.x = this.position.x;
		this.text.y = this.position.y;
		
		this.lines = {
			image: PIXI.loader.resources["line"].texture,
			'top':{
				position:{
					x:425,
					y:105,
				},
				alpha:0,
				rotation:0,
			},
			'bottom':{
				position:{
					x:425,
					y:415,
				},
				alpha:0,
				rotation:0,
			},
			'middle':{
				position:{
					x:425,
					y:260,
				},
				alpha:0,
				rotation:0,
			},
			'cross_1':{
				position: {
					x: 425,
					y: 260,
				},
				alpha:0,
				rotation:0.6,
			},
			'cross_2':{
				position:{
					x:425,
					y:260,
				},
				alpha:0,
				rotation:-0.6,
			}
		};
		
		this.container.addChild(this.text)
	}
	
	increase(){
		this.coins+=3;
		this.updateText();
	}
	decrease(){
		this.coins-=1;
		this.updateText();
	}
	updateText(){
		this.text.text=this.val + this.coins;
	}
	
	checkForWin(result){
		this.stackLines = [];
		
		if(result[0].curr == result[1].curr &&  result[1].curr == result[2].curr){
			this.stackLines.push('middle')
		}
		if(result[0].next == result[1].next && result[1].next == result[2].next){
			this.stackLines.push('bottom')
		}
		if(result[0].prev == result[1].prev && result[1].prev == result[2].prev){
			this.stackLines.push('top')
		}
		if(result[0].prev == result[1].curr && result[1].curr == result[2].next){
			this.stackLines.push('cross_1')
		}
		if(result[0].next == result[1].curr && result[1].curr == result[2].prev){
			this.stackLines.push('cross_2')
		}
		if(this.stackLines.length){
			this.showLines();
		}
	}
	
	showLines(lines){
		this.linesContainer = this.container;
		
		this.stackLines.forEach((item)=>{
			this.increase();
			let line = new PIXI.Sprite(
				this.lines.image
				);
			line.position.x = this.lines[item].position.x;
			line.position.y = this.lines[item].position.y;
			line.alpha      = this.lines[item].alpha;
			line.rotation   = this.lines[item].rotation;
			line.anchor.set(0.5)
			this.stash.push(line)
			this.linesContainer.addChild(line)
		})
		this.animate();
		
	}
	
	removeLine(){
		setTimeout(()=>{
			this.stash.forEach((item)=>{
				this.linesContainer.removeChild(item)
			});
			this.stash=[];
		}, 500)
	}
	animate(){
		
		this.stash.forEach((item)=>{
			if(item.alpha<1)item.alpha      +=0.05;
			else this.removeLine();
		});
		
		requestAnimationFrame(this.animate.bind(this));
	}
	refillAcount(){
		let letrefillPopup = new PIXI.Container(),
			wrapper = new PIXI.Graphics(),
		width = 960,height=535;
			
		wrapper.lineStyle(2, 0x0000FF, 1);
		wrapper.beginFill(0x000000, 0.7);
		wrapper.drawRect(0, 0, width,height);
		
		var style = {
			fontFamily : 'Arial',
			fontWeight : 'bold',
			fontSize : '46px',
			fill : '#60baf2',
			stroke : '#4a1850',
			strokeThickness : 5,
			wordWrap : true,
			wordWrapWidth : 440
		};
		let text = new PIXI.Text('refill acount',style);
		text.anchor.set(0.5)
		text.x = width/2;
		text.y = height/2;
		
		letrefillPopup.addChild(wrapper)
		letrefillPopup.addChild(text)
		
		this.container.addChild(letrefillPopup)
	}
}