import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'invoice-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchKeyOut = new EventEmitter();

  searchKey = "";

  constructor() { }

  ngOnInit() {
  }

  valuechange(newValue){
    this.searchKey = newValue;
    this.searchKeyOut.emit(this.searchKey);
  }


}
