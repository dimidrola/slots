export default class Loader{
	constructor(fn){
		let loader = PIXI.loader;
		loader.add([
			{name: 'BTN_Spin', url: require("file!../imgs/BTN_Spin.png")},
			{name: 'BTN_Spin_d', url: require("file!../imgs/BTN_Spin_d.png")},
			{name: 'line', url: require("file!../imgs/Bet_Line.png")},
			{name: 'BG', url: require("file!../imgs/BG.png")},
			{name: 'SYM1', url: require("file!../imgs/SYM1.png")},
			{name: 'SYM2', url: require("file!../imgs/SYM3.png")},
			{name: 'SYM3', url: require("file!../imgs/SYM4.png")},
			{name: 'SYM4', url: require("file!../imgs/SYM5.png")},
			{name: 'SYM5', url: require("file!../imgs/SYM6.png")},
			{name: 'SYM6', url: require("file!../imgs/SYM7.png")},
		]);
		
		loader.once('complete',fn);
		
		loader.load();
	}
	
	
}