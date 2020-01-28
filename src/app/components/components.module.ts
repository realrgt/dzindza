import { LeevasModule } from './leevas/leevas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom imports
import { SendModule } from './send/send.module';
import { CarryModule } from './carry/carry.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    // HomeModule, ==> Has been lazy loaded
    LeevasModule,
    CarryModule,
    SendModule
  ]
})
export class ComponentsModule {}
