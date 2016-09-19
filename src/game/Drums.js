import DrumsItem from './DrumItem'
import DrumsArea from '../core/DrumsArea'


export default class Drums extends DrumsArea{
	constructor(addToStage){
		super();
		this.addToStage = addToStage;
		this.x = 70;
		this.y = 10;
		this.width =721;
		this.height = 467;
		this.delayStop = 500;
		this.columnPadding = 8;
		this.drumPositions = 5;
		
		this.drums=[new DrumsItem([1,2,5,3,0,4]), new DrumsItem([5,3,2,0,1,4]), new DrumsItem([2,4,3,5,1,0])];
		
		
		this.container.x = this.x;
		this.container.y = this.y;
		
		this.addDrums();
		this.createMask();
		
	}
	
}