import { Component, OnInit } from '@angular/core';
import { Customer, CustomerDetail } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  conexionAgendToDay: Customer[];
  selectedAgenda: Customer;
  selectedAgendaDetail: CustomerDetail;

  constructor(private customerService: CustomersService) {
    this.customerService
      .getCustomers()
      .then((customers) => (this.conexionAgendToDay = customers));
  }

  ngOnInit(): void {}

  onClickAgenda(agenda: Customer) {
    this.selectedAgenda = agenda;
    this.customerService
      .getCustomerById(agenda.account_id)
      .then((agendaDetail) => (this.selectedAgendaDetail = agendaDetail));
    console.log({ agenda });
  }
}
