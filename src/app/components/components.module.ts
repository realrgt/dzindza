import { LeevasModule } from './leevas/leevas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom imports
import { HomeModule } from './home/home.module';
import { SendComponent } from './send/send.component';
import { CarryComponent } from './carry/carry.component';
import { LeevasComponent } from './leevas/leevas.component';
import { SendModule } from './send/send.module';

@NgModule({
  declarations: [
    SendComponent,
    CarryComponent,
    LeevasComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    LeevasModule,
    SendModule
  ]
})
export class ComponentsModule {}
