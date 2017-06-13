import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    ContractRoutingModule,
    PageHeaderModule
  ],
  declarations: [
      ContractComponent
  ]
})
export class ContractModule { }
