import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalRoutingModule } from './local-routing.module';
import { LocalComponent } from './local.component';


@NgModule({
  declarations: [LocalComponent],
  imports: [
    CommonModule,
    LocalRoutingModule
  ]
})
export class LocalModule { }
