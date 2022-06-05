import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Datum } from './data.model';
import data from './data.json';
@Injectable()
export class DataService implements OnInit {
    pieceOfData: Datum[] = data.data;
    
    constructor() {}

    ngOnInit() {}    
    
    onClick(type: string) {
        return new Observable<Datum[]>(subscriber => {
            let arr: Datum[] = [];
            this.pieceOfData.forEach(item => {
                if(item.type === type) {
                    arr.push(item);
                }
            })
            subscriber.next(arr);
            }         
        );    
    }
}