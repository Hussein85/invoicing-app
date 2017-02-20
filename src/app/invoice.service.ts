import { Injectable } from '@angular/core';
import { Invoice } from './invoice';



const INVOICES: Invoice[] = [
    {
        "id": 1,
        "type": "Checking",
        "accountName": "1267451**** - WOLFE",
        "status": "Active",
        "currency": "USD",
        "balance": 6266.33,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 2,
        "type": "Savings",
        "accountName": "5719371**** - MAENGUNE",
        "status": "Active",
        "currency": "USD",
        "balance": 10998.10,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 3,
        "type": "Savings",
        "accountName": "7125781**** - KAISER",
        "status": "Deactivated",
        "currency": "USD",
        "balance": 23.86,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 4,
        "type": "Checking",
        "accountName": "1267451**** - WOLFE",
        "status": "Active",
        "currency": "USD",
        "balance": 6266.33,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 5,
        "type": "Savings",
        "accountName": "5719371**** - MAENGUNE",
        "status": "Active",
        "currency": "USD",
        "balance": 10998.10,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 6,
        "type": "Savings",
        "accountName": "7125781**** - KAISER",
        "status": "Deactivated",
        "currency": "USD",
        "balance": 23.86,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 7,
        "type": "Checking",
        "accountName": "1267451**** - WOLFE",
        "status": "Active",
        "currency": "USD",
        "balance": 6266.33,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 8,
        "type": "Savings",
        "accountName": "5719371**** - MAENGUNE",
        "status": "Active",
        "currency": "USD",
        "balance": 10998.10,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 9,
        "type": "Savings",
        "accountName": "7125781**** - KAISER",
        "status": "Deactivated",
        "currency": "USD",
        "balance": 23.86,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 10,
        "type": "Checking",
        "accountName": "1267451**** - WOLFE",
        "status": "Active",
        "currency": "USD",
        "balance": 6266.33,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 11,
        "type": "Savings",
        "accountName": "5719371**** - MAENGUNE",
        "status": "Active",
        "currency": "USD",
        "balance": 10998.10,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 12,
        "type": "Savings",
        "accountName": "7125781**** - KAISER",
        "status": "Deactivated",
        "currency": "USD",
        "balance": 23.86,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 13,
        "type": "Checking",
        "accountName": "1267451**** - WOLFE",
        "status": "Active",
        "currency": "USD",
        "balance": 6266.33,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 14,
        "type": "Savings",
        "accountName": "5719371**** - MAENGUNE",
        "status": "Active",
        "currency": "USD",
        "balance": 10998.10,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 15,
        "type": "Savings",
        "accountName": "7125781**** - KAISER",
        "status": "Deactivated",
        "currency": "USD",
        "balance": 23.86,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 16,
        "type": "Checking",
        "accountName": "1267451**** - WOLFE",
        "status": "Active",
        "currency": "USD",
        "balance": 6266.33,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 17,
        "type": "Savings",
        "accountName": "5719371**** - MAENGUNE",
        "status": "Active",
        "currency": "USD",
        "balance": 10998.10,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 18,
        "type": "Savings",
        "accountName": "7125781**** - KAISER",
        "status": "Deactivated",
        "currency": "USD",
        "balance": 23.86,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 19,
        "type": "Checking",
        "accountName": "1267451**** - WOLFE",
        "status": "Active",
        "currency": "USD",
        "balance": 6266.33,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    },
    {
        "id": 20,
        "type": "Savings",
        "accountName": "5719371**** - MAENGUNE",
        "status": "Active",
        "currency": "USD",
        "balance": 10998.10,
        "notes": "Lorem ipsum dolor sit amet, viris blandit mediocrem id."    
    }
    
]


@Injectable()
export class InvoiceService {

  constructor() { }

  getInvoices(){
        return INVOICES;
  }

}
