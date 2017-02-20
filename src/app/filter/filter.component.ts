import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'invoice-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() accountFilter = new EventEmitter();
  
  filterText = "";

  constructor() { }

  ngOnInit() {
  }

  valuechange(newValue){
    this.filterText = newValue;
    this.accountFilter.emit(this.filterText);
  }


}


