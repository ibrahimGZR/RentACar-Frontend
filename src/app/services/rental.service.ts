import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalNormal } from '../models/rentalNormal';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44349/api/';
  constructor(private httpClient: HttpClient) {}

  getRentalsDetails(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(
      this.apiUrl + 'rentals/getalldetails'
    );
  }
  getRentalByCarId(carId: number): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(
      this.apiUrl + 'rentals/getdetailsbycarid?id=' + carId
    );
  }
  getRentals(): Observable<ListResponseModel<RentalNormal>> {
    return this.httpClient.get<ListResponseModel<RentalNormal>>(
      this.apiUrl + 'rentals/getall'
    );
  }

  addRental(rental: RentalNormal): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'rentals/add',
      rental
    );
  }
  updateRental(rental: RentalNormal): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'rentals/update',
      rental
    );
  }
  deleteRental(rental: RentalNormal): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'rentals/delete',
      rental
    );
  }
}
