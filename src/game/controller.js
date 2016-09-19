import Manager from '../core/manager'


import Loader from './Loader'
import Drums from './Drums'
import SpeenButton from './SpeenButton'
import Rating from './Rating'
import Fond from './Fond'

export default class Controller extends Manager{
	constructor(){
		super();
		this.width = 960;
		this.height = 535;
		this.createRenderer();
		
		new Loader(this.starter.bind(this));
	}
	
	
	
	starter(){
		this.createScene();
		this.createDrums();
		this.createButton();
		this.createRating();
		this.animate()
	}
	
	createScene(){
		this.font = new Fond();
		this.stageAdd(this.font.container);
	}
	createDrums(){
		this.drums = new Drums(this.stageAdd.bind(this));
		this.stageAdd(this.drums.container);
	}
	createButton(){
		this.button = new SpeenButton(this.onSpeen.bind(this));
		this.stageAdd(this.button.container);
	}
	createRating(){
		this.rating = new Rating();
		this.stageAdd(this.rating.container);
	}
	
	
	
	
	
	
	
	
	

	
}