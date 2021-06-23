import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44349/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCarsDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getalldetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getdetailsbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarByColorId(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getdetailsbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsById(id: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getdetailsbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarById(id: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  addCar(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'cars/add', car);
  }

  updateCar(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'update',
      car
    );
  }

  deleteCar(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'delete',
      car
    );
  }
}
