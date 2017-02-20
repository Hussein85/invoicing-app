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

    sortedInvoices: Invoice[];
    sortBy = "";
    accountFilter = "";
      
    ascending = { 
      type: true, 
      accountName: true,
      status: true,
      currency: true,
      balance: true  
    };


    constructor(private invoiceService:InvoiceService ) { }

    ngOnInit() {
      this.invoices = this.invoiceService.getInvoices();
      this.sortedInvoices = this.invoices.slice();
    }

    onSelect(invoice){
      this.selectedInvoice = invoice;
      this.isClosed = false;
    }

    close(isClosed: Boolean) {
        this.isClosed = isClosed;
    }

    sort(sortBy) {
      if(this.ascending[sortBy]){
          this.sortedInvoices.sort(function(a, b) {
            var x = a[sortBy]; var y = b[sortBy];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          });
      }else{
        this.sortedInvoices.sort(function(a, b) {
            var x = a[sortBy]; var y = b[sortBy];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
          });
      }

      this.ascending[sortBy] = !this.ascending[sortBy]
     
    }

    onClick(filterText){
      this.accountFilter = filterText;

    }

}
