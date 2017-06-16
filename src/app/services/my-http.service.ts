import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class MyHttpService {

  constructor(private _http: Http) { }
  getValuesFromMyHTTP(){

    return this._http
               .get(`http://jsonplaceholder.typicode.com/posts`)
            //   .map(response => response.json());
               //.map(response => response.json().data as User[]);
  }
}
export interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}
