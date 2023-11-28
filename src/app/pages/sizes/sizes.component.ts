import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  type: string;
  length: number;
  bust: number;
  size: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {type: 'Baby\'s Wear', length: 10, bust: 18, size: 'Small'},
  {type: 'Baby\'s Wear', length: 12, bust: 20, size: 'Medium'},
  {type: 'Baby\'s Wear', length: 14, bust: 22, size: 'Large'},

  {type: 'Lady\'s wear', length: 16, bust: 30, size: 'Small'},
  {type: 'Lady\'s wear', length: 18, bust: 32, size: 'Medium'},
  {type: 'Lady\'s wear', length: 20, bust: 34, size: 'Large'},

];

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss']
})
export class SizesComponent implements OnInit {
  tableHeading ='SIZE CHART';
  displayedColumns: string[] = ['type', 'length', 'bust', 'size'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
