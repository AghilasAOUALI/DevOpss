import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatToolbarModule} from "@angular/material";

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatToolbarModule, MatButtonModule],
  exports: [CommonModule, MatFormFieldModule, MatToolbarModule, MatButtonModule],
})
export class CustomMaterialModule { }
