
import {  PipeTransform, Pipe } from '@angular/core';
import { Invoice } from './invoice';

@Pipe({
    name: 'accountNameFilter'
})
export class AccountNamePipe implements PipeTransform {

    transform(value: Invoice[], filterBy: string): Invoice[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((invoice: Invoice) =>
            invoice.accountName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}