import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {
  coordinates: any;
  
  constructor() { }
  
  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
        navigator.geolocation.watchPosition((position: Position) => {
          observer.next(position);
        }),
        () => {
          console.log('Localização indisponível');
        },
        {
          enableHighAccuracy: true
        };
      });
    }
  }
  