import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, CustomerDetail } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomers(): Promise<Customer[]> {
    return this.http
      .get<Customer[]>('https://api.opendota.com/api/proPlayers')
      .toPromise();
  }

  getCustomerById(accountId): Promise<CustomerDetail> {
    return this.http
      .get<CustomerDetail>('https://api.opendota.com/api/players/'+ accountId)
      .toPromise();
  }
}
