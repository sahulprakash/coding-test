import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[FilterPipe]
})
export class SharedModule { }
