import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetail } from '../models/customerDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44349/api/customers/getalldetails"

  constructor(private httpClient:HttpClient) { }

    getCustomersDetails() : Observable<ListResponseModel<CustomerDetail>>{
      return  this.httpClient.get<ListResponseModel<CustomerDetail>>(this.apiUrl)

  }
}
