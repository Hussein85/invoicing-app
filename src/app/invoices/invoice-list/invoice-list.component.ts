import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  @Input() searchKeyIn: string;
  @Input() isClosedIn;
  @Output() invoiceOut = new EventEmitter();
  @Output() isClosedOut = new EventEmitter();

  selectedInvoice: Invoice;
  invoices: Invoice[];
  sortedInvoices: Invoice[];

  constructor(private invoiceService:InvoiceService) { }

  ngOnInit() {
    this.invoices = this.invoiceService.getInvoices();
    this.sortedInvoices = this.invoices.slice();
  }

  onSelect(invoice){
    this.selectedInvoice = invoice;
    this.invoiceOut.emit(invoice);
    this.isClosedOut.emit(false);
  }

  ascending = { 
      type: true, 
      accountName: true,
      status: true,
      currency: true,
      balance: true  
  };

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

}
