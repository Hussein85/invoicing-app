import { Component, OnInit } from '@angular/core';
import { Invoice } from './invoice';

import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    selectedInvoice: Invoice;
    invoices: Invoice[];

    constructor(private invoiceService:InvoiceService ) { }

    ngOnInit() {
      this.invoices = this.invoiceService.getInvoices();
    }

}
