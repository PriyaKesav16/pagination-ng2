import {Component} from '@angular/core';
import {PieChartService} from './piechart.service';

import 'chart.js/src/chart';


@Component({

  selector: 'pchart',
  template:` 
  <div class="row">
  <div class="col-md-6">

  <canvas baseChart
  [data]="pieChartData"
  [labels]="pieChartLabels"
  [chartType]="pieChartType"
   [options]="pieChartOptions"
  (chartHover)="chartHovered($event)"
  (chartClick)="chartClicked($event)"></canvas>
   <div>  <button (click)="randomized()">CLICK</button></div>
  </div>

 

  <div class="col-md-6">
  <div style="display: block;">
  <canvas baseChart width="300" height="300"
  [datasets]="lineChartData"
  [labels]="lineChartLabels"
  [options]="lineChartOptions"

  [legend]="lineChartLegend"
  [chartType]="lineChartType"
  (chartHover)="chartHovered($event)"
  (chartClick)="chartClicked($event)"></canvas>
  </div><div>  <button (click)="randomize()">CLICK</button></div></div>
  <div class="row">
  <div class="col-md-6">
  <div style="display: block">
  <canvas baseChart
  [datasets]="barChartData"
  [labels]="barChartLabels"
  [options]="barChartOptions"
  [legend]="barChartLegend"
  [chartType]="barChartType"
  (chartHover)="chartHovered($event)"
  (chartClick)="chartClicked($event)"></canvas>
  </div>
  </div>
  <div class="col-md-6">
  <div style="display: block">
  <canvas baseChart
  [data]="doughnutChartData"
  [labels]="doughnutChartLabels"
  [chartType]="doughnutChartType"
  [colors]="doughnutColors"
  (chartHover)="chartHovered($event)"
  (chartClick)="chartClicked($event)"></canvas>
  </div>
  </div>

  </div>
  <div class="row">
  <div class="col-md-6">

  <div style="display: block">

  <canvas baseChart
  [data]="polarAreaChartData"
  [labels]="polarAreaChartLabels"
  [legend]="polarAreaLegend"
  [chartType]="polarAreaChartType"
  (chartHover)="chartHovered($event)"
  (chartClick)="chartClicked($event)"></canvas>
  </div>
  </div>
  </div>

  `
  ,
  providers: [PieChartService],
  styles: [`.chart {
    display: block;
    width: 100%`],
    
  })



export class PieChartComponent{

  public data : any[];
  public s_id : any;

//  public pieChartData: any[];
 //public pieChartData:Array<any>
 // public pieChartLabels:string[];
  // public pieChartData:number[] = [100, 200, 200];
 // public pieChartType:string = 'pie';

  constructor(
    private _service:PieChartService){
    
      /* this._service.getServiceInfo().subscribe(data => {
      this.pieChartData = data;
      console.log(data)
    }, error => console.log('Could not load List of Service'));
*/ 
  }
ngOnInit(): void {
     this.data = this._service.getServiceInfo();
     console.log(this.data);

     // initializing Pie chart data
     this.pieChartData = new Array(this.data.length);

     for(var i=0; i< this.data.length; i++){
         console.log(this.data[i]);
        console.log('s_name' + this.data[i].s_name); 
        this.pieChartData[i] = this.data[i].s_id;
     }

      
     this.pieChartLabels= new Array(this.data.length);
     for(var i=0; i<this.data.length; i++){
       this.pieChartLabels[i]=this.data[i].s_name;
     }

  /* let _pieChartData:Array<any> = new Array(this.pieChartData.length);
    for (var i = 0; i < this.pieChartData.length; i++) {
            _pieChartData[i] = {data: new Array(this.pieChartData[i].data.length), S_id: this.pieChartData[i].s_name};

     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
         _pieChartData[i].data[j] =  this.data[i];
      }
     // this.pieChartLabels[i] = this.data[i].s_name;
      //this.pieChartData[i];
    }
     this.pieChartData = _pieChartData; */
  

   /*for( var i=0; i< this.data.length;i++){
   this.pieChartData[i]= this.data.push();

  }
 console.log(this.pieChartData); */
 /*public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;*/
    
    //this.pieChartData = [Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];
    /*for(let i=0; i<3; i++){
      this.pieChartData[i] = Math.floor((Math.random() * 100) + 1);
    }*/
  }
  public pieChartLabels:string[] ;

 //public pieChartLabels:string[] = ['Status: 200', 'Status 3xx', 'Status 4xx','Status 5xx'];
 //public pieChartData:number[] = [100, 200, 200];
 public pieChartData:number[] ;
 //public pieChartData:number[] = [Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];
 public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  public pieChartOptions:any = {
    animation: false,
    responsive: true,
    multiTooltipTemplate: "<%= label %> - <%= value %>"
  };


  // public pieChartData: Array<any>=[120 ,200,140,60 ];

    
 
 public randomized():void {
    let _pieChartData:Array<any> = new Array();
   /* for (let i = 0; i < this.pieChartData.length; i++) {
      _pieChartData[i] =  new Array(this.pieChartData.push);
      for (let j = 0; j < this.pieChartData[i]; j++) {
        _pieChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }*/
    this.pieChartData.push();
  }

 
  // LINE CHART 

  public lineChartData:Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Service 1'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Service 2'},
  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Service 3'}
  ];
  public lineChartLabels:Array<any> = ['user1', 'user2', 'user3', 'user4'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
 /* public lineChartColors:Array<any> = [
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
  ];*/
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

   public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  /// BAR CHART 
  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true,
    barValueSpacing : 3,
    barDatasetSpacing : 1
  };
  public barChartLabels:string[] = ['user 1', 'user 2', 'user 3'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
  {data: [65, 59, 80, 81, 56], label: 'Service 1'}
  
  ];

  // DOUGHNUT CHART
  public doughnutChartLabels:string[] = ['Service 1', 'Service 2', 'Service 3'];
  public doughnutChartData:number[] = [350, 450, 400];
  public doughnutChartType:string = 'doughnut';
   public doughnutColors:any[] = [{ backgroundColor: ['#FFF000', '#E74C3C', '#9CC2CB'] }];

  // POLAR AREA CHART
  public polarAreaChartLabels:string[] = ['Service 1', 'Service 2', 'Service 3', 'Service 4'];
  public polarAreaChartData:number[] = [400, 500, 120, 170];
  public polarAreaLegend:boolean = true;

  public polarAreaChartType:string = 'polarArea';

}
