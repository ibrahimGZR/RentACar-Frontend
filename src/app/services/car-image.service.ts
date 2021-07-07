import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  selectedFile: File

  apiUrl ="https://localhost:44349/api/";
  constructor(private httpClient : HttpClient,private toastrService:ToastrService) { }
  getCarImagesByCarId(id:number): Observable<ListResponseModel<CarImage>>
  {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+"carimages/getbycarid?carid="+id);

  };
  getAllImages():Observable<ListResponseModel<CarImage>>
  {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+"carimages/getall");

  }
  add(image:FormData):Observable<SingleResponseModel<CarImage>> {
    let newPath = this.apiUrl + "carimages/add";
    return this.httpClient.post<SingleResponseModel<CarImage>>(newPath, image );
  }
}
