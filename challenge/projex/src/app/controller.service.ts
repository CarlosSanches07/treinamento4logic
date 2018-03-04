import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
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
  		.catch(err => err.json().error || "#")
  }

  getById(id : string, route : string) : Observable<any> {
  	return this.http.get(`${environment.apiUrl}${route}/${id}`)
  		.map((res : Response) => res.json())
  		.catch(err => err.json().error || "#")
  }

  update(data : any, route : string) : Observable<any> {
  	return this.http.put(`${environment.apiUrl}${route}/${data._id}`, data)
  		.map((res : Response) => res.json())
  		.catch(err => err.json().error || "#");
  }

  create(data : any, route : string) : Observable<any> {
    console.log(data);
  	return this.http.post(`${environment.apiUrl}${route}`, data)
  		.map((res : Response) => res.json())
  		.catch(err => err.json().error || "#");
  }

  delete(id : string, route : string) : Observable<any> {
    return this.http.delete(`${environment.apiUrl}${route}/${id}`)
      .map((res : Response) => res.json())
      .catch(err => err.json().error || "#");
  }

}
