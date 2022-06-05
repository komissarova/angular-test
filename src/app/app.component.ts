import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Datum } from './data.model';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string = 'more-app';
    arr: Datum[] = [];
    isActivated: boolean = false; 

    constructor(private dataService: DataService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.onTabLinkClick('income');     
        this.route.queryParams.subscribe((params: Params) => {        
            if(params.hasOwnProperty('tab')) {              
                this.isActivated = false;   
            } else {
                this.isActivated = true;
            }
        });
    }

    onTabLinkClick(type: string) {
        this.dataService.onClick(type).subscribe(data => {
            this.arr = data;
        });
    }
}
