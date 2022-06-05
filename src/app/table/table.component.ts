import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() arr: Datum[] = []; 
 
    ngOnInit() {}
}
