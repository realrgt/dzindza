import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SendData } from '../mocks/send-data';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MultiStepService {

    // behavior subject
    private dataSource = new BehaviorSubject<SendData>(new SendData());
    data = this.dataSource.asObservable();

    // firestore
    private ordersCollection: AngularFirestoreCollection<SendData>;
    orders: Observable<SendData[]>;

    constructor(
        private afs: AngularFirestore
    ) {
        this.ordersCollection = this.afs.collection<SendData>('orders-send');
        this.orders = this.ordersCollection.valueChanges();
    }

    getOrders() {
        return this.data
            .pipe(
                take(1),
                tap(console.log)
            );
    }

    addOrder(order: SendData) {
        this.ordersCollection.add({...order});  // spread order values to a new default object to firebase take it

        // try {
        //     await this.ordersCollection.add(order);
        //     console.log('order added successfully');
        // } catch (err) {
        //     console.log(err);
        // }
    }

    // behavior subject
    updateSendDataSource(data: SendData) {
        this.dataSource.next(data);
    }

}
