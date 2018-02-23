import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/observable';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ControllerService {

  constructor(
  	private http : Http
  	) { }

  listAll(route : string) : Observable<any> {
  	return this.http.get(`${environment.apiUrl}${route}`)
  		.map((res : Response) => res.json())
  		.catch((err : any) => err.json().error || "Service Error")
  }

  getById(id : string, route : string) : Observable<any> {
  	return this.http.get(`${environment.apiUrl}${route}/${id}`)
  		.map((res : Response) => res.json())
  		.catch((err : any) => err.json().error || "Service Error")
  }

  update(data : any, route : string) : Observable<any> {
  	return this.http.put(`${environment.apiUrl}${route}/${data.id}`, data)
  		.map((res : Response) => res.json())
  		.catch((err) => err.json().error || "Service Error");
  }

  create(data : any, route : string) : Observable<any> {
  	return this.http.post(`${environment.apiUrl}${route}/${data.id}`, data)
  		.map((res : Response) => res.json())
  		.catch((err) => err.json().error || "Service Error");
  }

  delete(id : string, route : string) : Observable<any> {
    return this.http.delete(`${environment.apiUrl}${route}/${id}`)
      .map((res : Response) => res.json())
      .catch((err) => err.json().error || "Service Error");
  }

}
