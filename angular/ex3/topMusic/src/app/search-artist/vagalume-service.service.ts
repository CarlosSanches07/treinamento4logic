import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class VagalumeServiceService {

  constructor(
    private http : Http
    ) { }

  getArtists(song : string ) : Observable<any> {
    if(!song)
      return null;

    return this.http.get(`${environment.apiUrl}q=${song}`)
      .map((res : Response) => res.json())
      .catch((err : any) => Observable.throw(err.json().error) || 'Service Error');
  }

}
