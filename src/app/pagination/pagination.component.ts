import {Component,ChangeDetectionStrategy,Input} from '@angular/core';
import {PaginationInstance} from 'ng2-pagination';
import {PaginationService} from './pagination.service';





@Component({
		selector: 'page',
		template: require('./pagination.component.html'),/*`<ul><li *ngFor="let i of Collection | paginate:{itemsPerPage:5, currentPage:p}">{{ i }}
		</li>
		</ul>
		<pagination-controls (pageChange)="p= $event"
					directionLinks="true" autoHide="true"></pagination-controls>
		`*/
		 changeDetection: ChangeDetectionStrategy.OnPush,
		 providers: [PaginationService],
		 //styleUrls: ['pagination.css']
		  //styles: [require('./pagination.component.scss')],
		   styles: [` 
					table {
    					width: 100%;
    					display:block;
							}
					thead {
    					display: inline-block;
    					width: 100%;
    					border: 1px solid black;
    					height: 20px;
						}
					tbody {
    						height: 200px;
    						display: inline-block;
    						width: 100%;
    						overflow: overlay;
    						border: 1px solid black;
						}
					thead, tbody tr {
    						display:table;
    						width:100%;
    						table-layout:fixed; 
						}
						td {width:100px; word-wrap:break-word;
							max-width: 200px;
						 border: 1px solid black;}	
						 th {
    					background-color: #4CAF50;
    					color: white;
    					text-align: center;
						}
						tr:nth-child(even){background-color: #f2f2f2}
 


					`]
})


export class  PaginationComponent{

	//public Collection: any[]=['item1','item2','item2','item2','item2','item2','item2','item2','item2'];
	@Input('data') items: string[]=[];
	//@Input('data') meals: string[] = ['item1','item2','item3','item4','item4','item4','item4','item4','item4','item4','item4'];

	 
	public maxSize:number;
	public directionLinks: boolean=true;
	public autoHide:boolean=false;
	public tableData: any[];

   public config: PaginationInstance = {
   	id: 'advanced',
   	itemsPerPage: 5,
   	currentPage:1

   };

    private popped:any =[];

    onPageChange(number: number){
    	console.log('change to page',number);
    	this.config.currentPage=number;

    }

    pushItem(){
    	let item= this.popped.pop() || 'No new items to show';
    	this.items.push(item);
    }

    popItem(){
    	this.popped.push(this.items.pop());
    }

	constructor(private _paginationservice: PaginationService) {

		console.log("hello");
		this._paginationservice.getData().subscribe(data => {
		this.tableData=data.elasticSearchValues;
     console.log("values"+this.tableData);

    }, error => console.log('Could not load List of Service'));
		// code...

		 
	}

}
