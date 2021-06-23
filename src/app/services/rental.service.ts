import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44349/api/rentals/"
  constructor(private httpClient:HttpClient) { }

  getRentalsDetails(): Observable<ListResponseModel<RentalDetail>>{
    return  this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl+"getalldetails")

  }
  getRentalByCarId(carId:number): Observable<ListResponseModel<RentalDetail>>{
    return  this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl+"getdetailsbycarid?id="+carId)

  }
  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"getall")
  }

  addRental(rental:Rental):Observable <ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",rental)
  }
  updateRental(rental:Rental):Observable <ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",rental)
  }
  deleteRental(rental:Rental):Observable <ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",rental)
  }
}
