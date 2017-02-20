import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { InvoiceService } from './invoice.service';
import { AccountNamePipe } from './account-name.pipe';
import { FilterComponent } from './filter/filter.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceDetailComponent,
    AccountNamePipe,
    FilterComponent,
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
