import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// firebase
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // logged in (retrieve data)
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // not logged (return observable of null)
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    console.log(credential);
    return this.setUserData(credential.user);
  }

  // email and password auth
  async emailSignUp(email: string, password: string) {
    return await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        this.setUserData(userCredential.user); // create initial user document in firestore
        console.log('Registered successfully', userCredential);
      })
      .catch(err => this.handleError(err));
  }

  async emailLogin(email: string, password: string) {
    return await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('Logged in', userCredential);
      })
      .catch(err => this.handleError(err));
  }

  // set user data to firestore after successful login
  private setUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    return userRef.set(userData, { merge: true });
  }

  updateUserData(user: User, data: any) {
    return this.afs.doc(`users/${user.uid}`).update(data);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }

  // if error, console log
  private handleError(error) {
    console.error('Error: ', error);
  }

}
