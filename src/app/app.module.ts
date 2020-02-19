import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// Custom components
import { ComponentsModule } from './components/components.module';
import { ChatModule } from './chat/chat.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // angular
    BrowserModule,
    HttpClientModule,
    // custom
    ComponentsModule,
    ChatModule,
    CoreModule,
    BrowserAnimationsModule,

    // firebase
    AngularFireModule.initializeApp(environment.firebase, 'leeva'),
    AngularFirestoreModule,   // database features
    AngularFireStorageModule, // storage features
    AngularFireAuthModule,    // auth features

    // routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
