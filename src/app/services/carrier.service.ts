import { Injectable } from '@angular/core';

// firestore imports
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

// custom imports
import { Carrier } from '../models/carrier';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  private carriersCollection: AngularFirestoreCollection<Carrier>;
  carriers: Observable<Carrier[]>;

  constructor(private afs: AngularFirestore) {
    this.carriersCollection = afs.collection<Carrier>('carriers-list');
    this.carriers = this.carriersCollection.valueChanges();
  }

  getCarriers() {
    return this.carriers
      .pipe(
        take(1),
        tap(console.log)
      );
  }

}
