import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceService } from './invoice.service';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceDetailComponent
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
