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
    isClosed: Boolean;

    constructor(private invoiceService:InvoiceService ) { }

    ngOnInit() {
      this.invoices = this.invoiceService.getInvoices();
    }

    onSelect(invoice){
      this.selectedInvoice = invoice;
      this.isClosed = false;
    }

    close(isClosed: Boolean) {
        this.isClosed = isClosed;
    }

}
