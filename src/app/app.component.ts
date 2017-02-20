import { Component, OnInit } from '@angular/core';
import { Invoice } from './invoices/invoice';


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
    searchKey = "";
      
    ascending = { 
      type: true, 
      accountName: true,
      status: true,
      currency: true,
      balance: true  
    };

    constructor() { }

    ngOnInit() { }

    getSelectedInvoice(invoice){
      this.selectedInvoice = invoice;
    }

    getIsClosed(isClosed){
      this.isClosed = isClosed;
    }

    getSearchKey(searchKey){
      this.searchKey = searchKey;
    }

}
