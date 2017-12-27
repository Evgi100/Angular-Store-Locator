
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'


@Injectable()
export class StoresService {

  private dataUrl = 'http://localhost:4200/assets/data.json'
  stores = [];

  // loadStores: Observable<any>
  constructor(private http: Http) { }



  ngOnInit() {
    // this.fetchStores()
  }

  // fetchStores(){
  //   this.http.get("app/assets/data.json")
  //     .subscribe(
  //       (response:Response) =>{
  //         this.stores=response.json()
  //         console.log(response.json)
  //     }
  //   );
  // }

  // fetchStores(): Observable<any[]> {
  //   return this.http.get('http://localhost:4200/assets/data.json')
  //     .map((response: Response) =>
  //       <any[]>response.json())
  //     .do(data => console.log(JSON.stringify(data)))
  // }

  getStores() {
    return  this.http.get('/assets/data.json').map(res=>res.json())
  }

}


