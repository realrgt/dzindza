import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


// Custom components
import { ComponentsModule } from './components/components.module';
import { ChatModule } from './chat/chat.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    ChatModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ScrollingModule,
    // MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
