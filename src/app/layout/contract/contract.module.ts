import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContractRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [
      ContractComponent
  ]
})
export class ContractModule { }
