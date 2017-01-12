import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";


import 'rxjs/add/operator/map'
import {PieData} from './pieData';

@Injectable()
export class PieChartService {

constructor(private http: Http) { }

//piechart(){

      /*return this.http.get("../../piechart.json")
                    .map(response => response.json());*/
               //.subscribe(res => createFile(res));
//}


//Service{"serviceId", "serviceName", "upTime", "downTime"};

getServiceInfo(){
	const SERVICES: PieData[] = [
		{s_id: 40,s_name:'service 1', s_value:'service 1', s_uptime:'3200', s_downtime:'50'},
		{s_id :50, s_name:'service 2', s_value:'service 2', s_uptime:'1600', s_downtime:'20'},
		{s_id :2, s_name:'service 3', s_value:'service 3', s_uptime:'3200', s_downtime:'50'},
		{s_id :1, s_name:'service 4', s_value:'service 4', s_uptime:'1600', s_downtime:'20'}
	];

	return SERVICES;
}
	
	checkservice(){
		return console.log('My name is', 'Kavi');
	}

}