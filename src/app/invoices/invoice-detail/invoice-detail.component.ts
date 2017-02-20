import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Invoice } from '../invoice';

@Component({
  selector: 'invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  
  @Input() invoice: Invoice;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeWindow(){
    this.close.emit(true);
  }

}

