import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';

import { InvoiceService } from './invoices/invoice.service';
import { AccountNamePipe } from './invoices/account-name.pipe';

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoices/invoice-detail/invoice-detail.component';
import { SearchBarComponent } from './invoices/search-bar/search-bar.component';
import { MenuComponent } from './invoices/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceDetailComponent,
    AccountNamePipe,
    InvoiceListComponent,
    InvoiceDetailComponent,
    SearchBarComponent,
    MenuComponent
  ],
  imports: [
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
