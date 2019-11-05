import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatDividerModule,
  MatTooltipModule
} from '@angular/material';



const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatTooltipModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, materialComponents
  ],
  exports: [
    CommonModule, materialComponents
  ]

})
export class MaterialModule { }
