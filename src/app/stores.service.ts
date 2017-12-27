
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'


@Injectable()
export class StoresService {

  private dataUrl = 'http://localhost:4200/assets/data.json'
  stores = [];

  constructor(private http: Http) { }



  ngOnInit() {
  }

 

 

  getStores() {
    return  this.http.get('/assets/data.json').map(res=>res.json())
  }

}


