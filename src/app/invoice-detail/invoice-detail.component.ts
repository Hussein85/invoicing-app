import { Component, OnInit, Input } from '@angular/core';

import { Invoice } from '../invoice';

@Component({
  selector: 'invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  @Input()
  invoice: Invoice;

  constructor() { }

  ngOnInit() {
  }

}
