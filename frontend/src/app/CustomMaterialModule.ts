import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDrawer,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
  exports: [CommonModule, MatFormFieldModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
})
export class CustomMaterialModule { }
