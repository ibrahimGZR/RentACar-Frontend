import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44349/api/"

  constructor(private httpClient:HttpClient) { }

    getUsers() : Observable<ListResponseModel<User>>{
      let newPath = this.apiUrl + "users/getall"
      return  this.httpClient.get<ListResponseModel<User>>(newPath)

  }
  getByUserId(id:number):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl + "users/getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }
  update(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"users/update", user)
  }
}
