import { Component, NgZone } from '@angular/core';
import { StoresService } from './stores.service'
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms'
import { ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import 'rxjs/add/operator/map';
import { HaversineService, GeoCoord } from "ng2-haversine";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public zoom: number;
  public locationChosen = false;
  public stores: string;

  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef


  constructor(private storeService: StoresService,
    private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private haversineService: HaversineService) { }

  ngOnInit() {
    this.zoom = 13;
    this.latitude = 32.0853;
    this.longitude = 34.7818;
    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.locationChosen = true;
        });
      });
    });
  }

  onMapClick($event) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.locationChosen = true;

  }

  onSubmit() {
    this.storeService.getStores().subscribe((data) => {
      
      data.chains.map((item) => {
        console.log(item)
        console.log(item.latitude);
        console.log(item.longitude)
      });

      this.stores = data.chains;
    });

  }

}
